import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    return Ember.RSVP.hash({
      songPart: this._super(...arguments),
      singers: this.store.findAll('singer'),
    });
  },

  renderTemplate() {
    this.render({ outlet: 'modal' });
  },

  beforeModel() {
    this.controllerFor('songs.song').set("isEditingSongPart", true);
  },
  actions: {
    close(){
      this.transitionTo("songs.song", this.modelFor("songs.song"));
    }
  }
});
