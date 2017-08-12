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
    delete(){
      this.get("model.singer").deleteRecord();
      let a = this.store.peekAll("singer-part");
      console.log(a)
    },
    save(){
      let deleted = this.model.get("isDeleted");
      this.get("model.singer").save();
      this.get("model.user").save();

      if(deleted) {
        this.send("backToList");
      } else {
        this.send("backToView", this.get("model.singer"));
      }
    },
    cancel(){
      this.get("model.singer").rollbackAttributes();
      this.get("model.user").rollbackAttributes();
      this.send("backToView", this.get("model"));
    },
  }
});
