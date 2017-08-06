import Ember from 'ember';
import DS from 'ember-data';

export default Ember.Controller.extend({
  singersSorting: ["mainSection.orderKey"],
  sortedSingers: Ember.computed.sort("model", "singersSorting"),
});
