import Ember from 'ember';
import DS from 'ember-data';

export default Ember.Controller.extend({

  modifiedSingerParts: [],

  activeList: null,

  isValidateDisabled: Ember.computed.empty("model.songPart.name"),

  isMainListActive: Ember.computed.equal("activeList", "main"),

  isAdditionalListActive: Ember.computed.equal("activeList", "additional"),

  selectableSingers: Ember.computed(
    "model.singers", "mainSingers", "additionalSingers", function(){
      return  DS.PromiseArray.create({
        promise: Ember.RSVP.Promise.all([
          this.get("model.singers"),
          Ember.RSVP.Promise.all(this.get("mainSingers")),
          Ember.RSVP.Promise.all(this.get("additionalSingers")),
        ]).then(([allSingers, mainSingers, additionalSingers])=>{
          return allSingers.reject((singer)=>{
            return mainSingers.includes(singer) || additionalSingers.includes(singer);
          });
        })
      });
    }
  ),

  mainSingers: Ember.computed(
    "model.songPart.singerParts.@each.{isMainPart,isDeleted,singer}", {
      get: function(){
        return (this.get("model.songPart.singerParts")
                .filterBy("isDeleted", false)
                .filterBy("isMainPart", true)
                .getEach("singer"));
      },
    }
  ),

  additionalSingers: Ember.computed(
    "model.songPart.singerParts.@each.{isMainPart,isDeleted,singer}", {
      get: function(){
        return (this.get("model.songPart.singerParts")
                .filterBy("isDeleted", false)
                .filterBy("isMainPart", false)
                .getEach("singer"));
      },
    }
  ),

  actions: {
    validate() {
      this.model.songPart.save();
      this.get("modifiedSingerParts").forEach((singerPart)=>{
        singerPart.save();
      });
      this.get("target").send("close");
    },
    cancel() {
      this.model.songPart.rollbackAttributes();
      this.get("modifiedSingerParts").forEach((singerPart)=>{
        singerPart.rollbackAttributes();
      });
      this.get("target").send("close");
    },

    activateList(list) {
      if(this.get("activeList") === list) {
        this.set("activeList", null);
      } else {
        this.set("activeList", list);
      }
    },

    deleteSinger (singer, main){
      let singerPart = (
        this.get("model.songPart.singerParts")
        .filterBy("isMainPart", main)
        .filterBy("singer", singer).get("firstObject"));

      singerPart.deleteRecord();
      this.get("modifiedSingerParts").pushObject(singerPart);
    },

    addSinger(singer, main) {
      let singerPart = this.get('store').createRecord('singer-part',
        {
          isMainPart: main,
          singer: singer,
          songPart: this.get("model.songPart"),
        });

      this.get("modifiedSingerParts").pushObject(singerPart);
    },
  }
});
