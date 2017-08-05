import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('songs', function(){
    this.route('song', { path: ':song_id' }, function() {
      this.route('edit-part', { path: 'edit-part/:song_part_id' });
    });
    this.route('random');
  });

  this.route('folders', function(){
    this.route('folder', { path: ':folder_id' }, function(){
      this.route('songs');
    });
  });
});

export default Router;
