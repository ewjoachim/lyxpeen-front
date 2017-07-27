import Ember from 'ember';

export default Ember.Controller.extend({

  isValidateDisabled: Ember.computed.empty("model.songPart.name"),

  selectedSingers: Ember.computed(
    "model.singers", "model.songPart", {
      get: function(key){
        return (this.model.songPart
            .get("singerParts")
            .filterBy("isMain", true)
            .getEach("singer"));
      },
      set: function(key, value){
      },
    }
  ),
  unselectedSingers: Ember.computed.setDiff(
    "model.singers", "selectedSingers"),

  selectedAdditionalSingers: Ember.computed(
    "model.singers", "model.songPart", {
      get: function(key){
        return (this.model.songPart
            .get("singerParts")
            .filterBy("isMain", false)
            .getEach("singer"));
      },
      set: function(key, value){
      },
    }
  ),
  unselectedAdditionalSingers: Ember.computed.setDiff(
    "model.singers", "selectedAdditionalSingers"),

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
