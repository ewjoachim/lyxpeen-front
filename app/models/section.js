import Ember from 'ember';
import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  color: DS.attr('string'),
  orderKey: DS.attr('number'),
  songParts: DS.hasMany('song-part'),
  singers: DS.hasMany('singer'),

  colorClass: Ember.computed("color", function(){
    let color = this.get("color");
    return {
      "red": "danger",
      "green": "success",
      "blue": "info",
      "yellow": "warning",
    }[color] || color
  })
});
