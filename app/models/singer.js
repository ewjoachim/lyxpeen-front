import DS from 'ember-data';

export default DS.Model.extend({
  singerParts: DS.hasMany('singer-part')
});
