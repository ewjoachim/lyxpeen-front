import Ember from 'ember';
import DS from 'ember-data';

export default Ember.Controller.extend({

  modifiedSingerParts: [],

  activeList: null,

  isValidateDisabled: Ember.computed.empty("model.name"),

  isMainListActive: Ember.computed.equal("activeList", "main"),

  isAdditionalListActive: Ember.computed.equal("activeList", "additional"),

  selectableSingers: Ember.computed(
    "mainSingers", "additionalSingers", function(){
      return  DS.PromiseArray.create({
        promise: Ember.RSVP.Promise.all([
          Ember.RSVP.Promise.all(this.get("mainSingers")),
          Ember.RSVP.Promise.all(this.get("additionalSingers")),
        ]).then(([mainSingers, additionalSingers])=>{
          return this.store.peekAll("singer").reject((singer)=>{
            return mainSingers.includes(singer) || additionalSingers.includes(singer);
          });
        })
      });
    }
  ),

  mainSingers: Ember.computed(
    "model.singerParts.@each.{isMainPart,isDeleted,singer}", {
      get: function(){
        return (this.get("model.singerParts")
                .filterBy("isDeleted", false)
                .filterBy("isMainPart", true)
                .getEach("singer"));
      },
    }
  ),

  additionalSingers: Ember.computed(
    "model.singerParts.@each.{isMainPart,isDeleted,singer}", {
      get: function(){
        return (this.get("model.singerParts")
                .filterBy("isDeleted", false)
                .filterBy("isMainPart", false)
                .getEach("singer"));
      },
    }
  ),

  actions: {
    validate() {
      this.model.save();
      this.get("modifiedSingerParts").forEach((singerPart)=>{
        singerPart.save();
      });
      this.get("target").send("close");
    },
    cancel() {
      this.model.rollbackAttributes();
      this.model.reload()
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
        this.get("model.singerParts")
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
          songPart: this.get("model"),
        });

      this.get("modifiedSingerParts").pushObject(singerPart);
    },
  }
});
