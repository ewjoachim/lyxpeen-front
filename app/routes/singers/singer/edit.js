import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    let singer = this.modelFor("singers.singer");
    return Ember.RSVP.hash({
      singer: singer,
      user: singer.get("user"),
    });
  },
  afterModel(){
    return this.store.findAll('section');
  },


  actions: {
    willTransition(){
      this.get("controller.model.singer").rollbackAttributes();
      this.get("controller.model.user").rollbackAttributes();
    },
    backToList() {
      this.transitionTo("singers");
    },
    backToView(model) {
      this.transitionTo("singers.singer.view", model);
    },
  }
});
