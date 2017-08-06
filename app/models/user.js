import DS from 'ember-data';

export default DS.Model.extend({
  singer: DS.belongsTo('singer'),
  name: DS.attr('string'),
  username: DS.attr('string'),
});
