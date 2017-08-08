import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('singer')
  },
  afterModel(singers) {
    return Ember.RSVP.Promise.all(singers.getEach("mainSection"))
  }
});
