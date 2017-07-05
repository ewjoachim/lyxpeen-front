import DS from 'ember-data';

export default DS.JSONSerializer.extend({

  keyForAttribute(attr) {
    console.log("keyForAttribute", attr, Ember.String.underscore(attr));
    return Ember.String.underscore(attr);
  },

  keyForRelationship(attr) {
    console.log("keyForRelationship", attr, Ember.String.underscore(attr));
    return Ember.String.underscore(attr);
  },
});
