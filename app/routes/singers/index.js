import Ember from 'ember';

export default Ember.Route.extend({
  redirect(model) {
      this.replaceWith(
        "singers.singer",
        // If available, use the sorted model
        (this.controllerFor("singers").get("sortedSingers.firstObject")
        // But default to the unsorted one
         || model.get("firstObject")));
  },
});
