import DS from 'ember-data';

export default DS.Model.extend({
  user: DS.belongsTo('user'),
  mainSection: DS.belongsTo('section'),
  isActive: DS.attr('boolean'),
  singerParts: DS.hasMany('singer-part')
});
