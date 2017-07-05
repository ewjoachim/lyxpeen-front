import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  song: DS.belongsTo('song'),
  section: DS.belongsTo('section'),
  singerParts: DS.hasMany('singer-part')
});
