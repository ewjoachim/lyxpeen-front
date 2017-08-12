import Ember from 'ember';

export default Ember.Route.extend({
  redirect(model) {
      this.replaceWith("singers.singer.view", model);
  },
});
