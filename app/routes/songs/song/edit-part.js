import Ember from 'ember';

export default Ember.Route.extend({

  beforeModel() {
    this.controllerFor('songs.song').set("isEditingSongPart", true);
  },
  afterModel(model) {
    return Ember.RSVP.hash({
      singers: this.store.findAll('singer'),
      singerParts: model.get("singerParts"),
    }).then(({singers})=>{
      return Ember.RSVP.all(singers.getEach("mainSection"))
    });
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
