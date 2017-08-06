import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    let result;
    return this.store.findAll('singer').then((singers)=>{
      result = singers
      return Ember.RSVP.Promise.all(singers.getEach("mainSection"));
    }).then(()=>result);
  },
});
