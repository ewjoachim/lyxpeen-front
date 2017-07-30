import DS from 'ember-data';

export default DS.Model.extend({
  songPart: DS.belongsTo('song-part'),
  singer: DS.belongsTo('singer'),
});
