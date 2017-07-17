import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    var folders = this.store.findAll('folder');

    folders.then(() => {
      this.transitionTo('folders.folder', folders.get("firstObject").id);
    })

    return folders;
  }
});
