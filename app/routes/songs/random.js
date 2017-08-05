import Ember from 'ember';

export default Ember.Route.extend({
  redirect(){
    this.store.queryRecord('song', {}).then((song)=>{
      this.replaceWith("songs.song", song);
    });
  }
});
