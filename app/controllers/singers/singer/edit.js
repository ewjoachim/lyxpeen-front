import Ember from 'ember';

export default Ember.Controller.extend({

  rollbackOnLeave: true,

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

      this.store.unloadAll('song-part');
      this.store.unloadAll('singer-part');


    },
    save(){
      this.set("rollbackOnLeave", false);
      let deleted = this.get("model.singer.isDeleted");
      Ember.RSVP.Promise.all([
        this.get("model.singer").save(),
        this.get("model.user").save(),
      ]).then(()=>{
        if(deleted) {
          this.send("backToList");
        } else {
          this.send("backToView", this.get("model.singer"));
        }
      })

    },
    cancel(){
      this.set("rollbackOnLeave", false);
      this.send("rollback");
      this.send("backToView", this.get("model.singer"));
    },
  }
});
