import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('folders', function(){
    this.route('folder', { path: ':id' }, function(){
      this.route('songs');
    });
  });
  this.route('song', { path: ':id' });
});

export default Router;
