import Ember from 'ember';

export default Ember.Controller.extend({

  sections: Ember.computed("", function(){
    return this.store.peekAll('section')
  }),

  actions: {

    save(){
      this.model.save();
      this.get("model.user").then((user)=>{
        user.save();

        this.send("view", this.model);
      });
    },
    cancel(){
      this.model.rollbackAttributes();
      this.get("model.user").then((user)=>{
        user.rollbackAttributes();

        this.send("view", this.model);
      });
    },
  }
});
