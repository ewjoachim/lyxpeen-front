import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    toggleMobileMenu(){
      this.set("isMobileMenuActive", !this.get("isMobileMenuActive"));
    }
  },
});
