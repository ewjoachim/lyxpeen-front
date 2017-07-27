import Ember from 'ember';

export default Ember.Controller.extend({

  isValidateDisabled: Ember.computed.empty("model.songPart.name"),

  getGenericSelectedSinger(key) {
    var isMain = (key === "selectedSingers");
    return (this.model.songPart
            .get("singerParts")
            .filterBy("isMain", isMain)
            .getEach("singer"));
  },
  setGenericSelectedSinger(key, value){
  },

  selectedSingers: Ember.computed(
    "model.singers", "model.songPart", {
      get: function(key){return this.getGenericSelectedSinger(key)},
      set: function(key, value){return this.setGenericSelectedSinger(key, value)},
    }
  ),
  unselectedSingers: Ember.computed.setDiff("model.singers", "selectedSingers"),

  selectedAdditionalSingers: Ember.computed(
    "model.singers", "model.songPart", {
      get: function(key){return this.getGenericSelectedSinger(key)},
      set: function(key, value){return this.setGenericSelectedSinger(key, value)},
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
