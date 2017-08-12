import Ember from 'ember';

export default Ember.Controller.extend({
  singersSorting: ["isActive:desc", "mainSection.orderKey", "user.name"],
  sortedSingers: Ember.computed.sort("model", "singersSorting"),
});
