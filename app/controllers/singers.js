import Ember from 'ember';
import DS from 'ember-data';

export default Ember.Controller.extend({

  mainSections: Ember.computed.alias("model.@each.mainSection"),

  sortedSingers: Ember.computed("mainSections.@each.orderKey", function(){
    return DS.PromiseArray.create({
      promise: Ember.RSVP.Promise.all(this.model.getEach("mainSection")).then((sections)=>{
        return this.model.sortBy("mainSection.orderKey");
      })
    })
  }),
});
