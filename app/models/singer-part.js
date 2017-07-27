import DS from 'ember-data';

export default DS.Model.extend({
  isMain: DS.attr('boolean'),
  songPart: DS.belongsTo('song-part'),
  singer: DS.belongsTo('singer'),
});
