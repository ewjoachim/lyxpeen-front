import Ember from 'ember';

export default Ember.Route.extend({
  redirect(model) {
    this.replaceWith('folders.folder', model.get("firstObject").id);
  }
});
