import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return this.modelFor("singers.singer");
  },

  actions: {
    view(model) {
      this.transitionTo("singers.singer.view", model);
    }
  }
});
