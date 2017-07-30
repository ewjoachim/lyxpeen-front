import DS from 'ember-data';

export default DS.Model.extend({
  isActive: DS.attr('boolean'),
  uploadedBy: DS.belongsTo('user'),
  uploadedAt: DS.attr('date'),
  path: DS.attr('string'),
  song: DS.belongsTo('song'),
  isXml: DS.attr('boolean'),
  isMainFile: DS.attr('boolean'),
});
