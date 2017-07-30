import DS from 'ember-data';

export default DS.Model.extend({
  folder: DS.belongsTo('folder'),
  name: DS.attr('string'),
  files: DS.hasMany('song-file', {inverse: 'song'}),
  songParts: DS.hasMany('song-part'),
});
