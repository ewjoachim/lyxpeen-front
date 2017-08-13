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
  setupController: function(controller, model) {
    controller.set('rollbackOnLeave', true);
    this._super(...arguments);
  },
  actions: {
    willTransition(){
      if (this.get("controller.rollbackOnLeave")) {
        this.send("rollback");
      }
    },
    rollback(){
      this.get("controller.model.singer").rollbackAttributes();
      this.get("controller.model.singer").reload();
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
