import DS from 'ember-data';

export default DS.Model.extend({
  main: DS.attr('boolean'),
  songPart: DS.belongsTo('song-part'),
  singer: DS.belongsTo('singer'),
});
