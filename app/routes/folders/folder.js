import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    var folder = this.store.findRecord('folder', params.id);

    folder.then(() => {
      this.transitionTo("folders.folder.songs");
    });
    return folder;
  },
});
