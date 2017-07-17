import DS from 'ember-data';
import Ember from 'ember';

export default DS.RESTAdapter.extend({
  namespace: "/api",

  buildURL: function(type, id, record) {
    //call the default buildURL and then append a slash
    return this._super(type, id, record) + '/';
  },

  pathForType: function(modelName) {
    var decamelized = Ember.String.underscore(modelName);
    return Ember.String.pluralize(decamelized);
  },

});
