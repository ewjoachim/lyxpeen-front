import DS from 'ember-data';

export default DS.Model.extend({
  songParts: DS.hasMany('song-part'),
});
