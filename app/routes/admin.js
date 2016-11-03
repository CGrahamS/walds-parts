import Ember from 'ember';

export default Ember.Route.extend({
  adminPortal: Ember.inject.service(),
  model() {
    return this.get('adminPortal');
  },
  actions: {
    adminLogIn() {
      this.get('adminPortal').adminLog();
    }
  }
});
