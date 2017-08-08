import Ember from 'ember';

export default Ember.Route.extend({

  beforeModel() {
    this.controllerFor('songs.song').set("isEditingSongPart", true);
  },
  afterModel() {
    return this.store.findAll('singer');
  },

  renderTemplate() {
    this.render({ outlet: 'modal' });
  },

  actions: {
    close(){
      this.transitionTo("songs.song", this.modelFor("songs.song"));
    }
  }
});
