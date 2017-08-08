import Ember from 'ember';

export default Ember.Controller.extend({
  singersSorting: ["mainSection.orderKey"],
  sortedSingers: Ember.computed.sort("model", "singersSorting"),
});
