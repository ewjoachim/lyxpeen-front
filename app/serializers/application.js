import DS from 'ember-data';
import Ember from 'ember';

export default DS.JSONSerializer.extend({

  keyForAttribute(attr) {
    return Ember.String.underscore(attr);
  },

  keyForRelationship(attr) {
    return Ember.String.underscore(attr);
  },
});
