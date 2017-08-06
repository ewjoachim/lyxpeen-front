import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  color: DS.attr('string'),
  orderKey: DS.attr('number'),
  songParts: DS.hasMany('song-part'),
  singers: DS.hasMany('singer'),
});
