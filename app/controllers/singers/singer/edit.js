import Ember from 'ember';

export default Ember.Controller.extend({

  sections: Ember.computed("", function(){
    return this.store.peekAll('section')
  }),
  sectionsSorting: ["orderKey"],
  sortedSections: Ember.computed.sort("sections", "sectionsSorting"),

  actions: {
    selectSection(section){
      this.set("model.singer.mainSection", section);
    },
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
