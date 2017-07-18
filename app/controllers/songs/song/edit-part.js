import Ember from 'ember';

export default Ember.Controller.extend({

  isValidateDisabled: Ember.computed("model.name", function(){
    return ! (this.get("model.name").length);
  }),

  actions: {
    validate(){
      if(this.get("model.hasDirtyAttributes")) {
        this.model.save();
      }
      this.get("target").send("close");
    },
    cancel(){
      this.model.rollbackAttributes();
      this.get("target").send("close");
    }
  }
});
