import Ember from 'ember';

export default Ember.Route.extend({
  redirect(model) {
      this.replaceWith(
        "singers.singer",
        this.controllerFor("singers").get("sortedSingers.firstObject"));
  },
});
