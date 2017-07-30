import DS from 'ember-data';

export default DS.Model.extend({
  song: DS.belongsTo('song'),
  singerParts: DS.hasMany('singer-part')
});
