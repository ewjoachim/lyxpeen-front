import Ember from 'ember';

export default Ember.Controller.extend({

  sections: Ember.computed("", function(){
    return this.store.peekAll('section')
  }),

  actions: {

    editName(){
      this.set("isEditingName", true);
    },
    save(){
      this.model.save();
      this.get("model.user").then((user)=>{
        user.save();
        this.set("isEditingName", false);
      });
    },
    cancel(){
      this.model.rollbackAttributes();
      this.get("model.user").then((user)=>{
        user.rollbackAttributes();
        this.set("isEditingName", false);
      });
    },
  }
});