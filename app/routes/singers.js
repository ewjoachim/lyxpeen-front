import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('singer');
  },
  afterModel(singers) {
    return Ember.RSVP.hash({
      sections: this.store.findAll('section'),
      users: this.store.findAll('user'),
    });
  },
});
