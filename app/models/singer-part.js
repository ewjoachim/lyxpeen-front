import DS from 'ember-data';

export default DS.Model.extend({
  isMainPart: DS.attr('boolean'),
  songPart: DS.belongsTo('song-part'),
  singer: DS.belongsTo('singer'),
});
