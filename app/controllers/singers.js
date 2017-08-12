import Ember from 'ember';

export default Ember.Controller.extend({
  singersSorting: ["isActive:desc", "mainSection.orderKey"],
  sortedSingers: Ember.computed.sort("model", "singersSorting"),
});
