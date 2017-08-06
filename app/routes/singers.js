import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    let result;
    return this.store.findAll('singer').then((singers)=>{
      result = singers
      // Before we return the list of all singers, make sure their
      // section is loaded.
      return Ember.RSVP.Promise.all(singers.getEach("mainSection"));
    }).then(()=>result);
  },
});
