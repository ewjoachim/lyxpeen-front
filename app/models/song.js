import DS from 'ember-data';

export default DS.Model.extend({
  folder: DS.belongsTo('folder'),
  name: DS.attr('string'),
  xmlFile: DS.belongsTo('song-file', {inverse: null}),
  scoreFile: DS.belongsTo('song-file', {inverse: null}),
  files: DS.hasMany('song-file', {inverse: 'song'}),
  songParts: DS.hasMany('song-part'),
});
