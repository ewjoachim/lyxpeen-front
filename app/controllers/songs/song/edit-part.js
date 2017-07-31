import Ember from 'ember';

export default Ember.Controller.extend({

  isValidateDisabled: Ember.computed.empty("model.songPart.name"),

  selectableSingers: Ember.computed(
    "model.singers", "mainSingers", "additionalSingers", function(){
      return Ember.RSVP.Promise.all([
              this.get("model.singers"),
              Ember.RSVP.Promise.all(this.get("mainSingers")),
              Ember.RSVP.Promise.all(this.get("additionalSingers")),
      ]).then(([allSingers, mainSingers, additionalSingers])=>{
        return allSingers.reject((singer)=>{
          return mainSingers.includes(singer) || additionalSingers.includes(singer);
        });
      });
    }
  ),

  mainSingers: Ember.computed(
    "model.songPart.singerParts.@each.{isMainPart,singer}", {
      get: function(key){
        return this.get("model.songPart.singerParts").filterBy("isMainPart", true).getEach("singer");
      },
    }
  ),

  additionalSingers: Ember.computed(
    "model.songPart.singerParts.@each.{isMainPart,singer}", {
      get: function(key){
        return this.get("model.songPart.singerParts").filterBy("isMainPart", false).getEach("singer");
      },
    }
  ),

  actions: {
    validate(){
      if(this.get("model.songPart.hasDirtyAttributes")) {
        this.model.songPart.save();
      }
      this.get("target").send("close");
    },
    cancel(){
      this.model.songPart.rollbackAttributes();
      this.get("target").send("close");
    }
  }
});
