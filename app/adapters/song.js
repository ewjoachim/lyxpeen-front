import ApplicationAdapter from './application';
import Ember from 'ember'

export default ApplicationAdapter.extend({
  queryRecord() {
    return Ember.$.getJSON(`${this.namespace}/songs/random`);
  }
});
