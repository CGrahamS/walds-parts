import Ember from 'ember';

export default Ember.Route.extend({
  adminPortal: Ember.inject.service(),
  model() {
    return Ember.RSVP.hash( {
     products: this.store.findAll('product'),
     adminLog: this.get('adminPortal')
   });
  },
  actions: {
    adminLogIn() {
      this.get('adminPortal').adminLog();
    }
  }
});
