import Ember from 'ember';

export default Ember.Controller.extend({

  isValidateDisabled: Ember.computed.empty("model.songPart.name"),

  mainSingers: Ember.computed(
    "model.singers", "model.songPart", {
      get: function(key){
        return (this.model.songPart
            .get("singerParts")
            .filterBy("isMainPart", true)
            .getEach("singer"));
      },
      set: function(key, value){
      },
    }
  ),
  mainSingersOptions: Ember.computed.setDiff(
    "model.singers", "mainSingers"),

  additionalSingers: Ember.computed(
    "model.singers", "model.songPart", {
      get: function(key){
        return (this.model.songPart
            .get("singerParts")
            .filterBy("isMainPart", false)
            .getEach("singer"));
      },
      set: function(key, value){
      },
    }
  ),
  additionalSingersOptions: Ember.computed.setDiff(
    "model.singers", "additionalSingers"),

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
