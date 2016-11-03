import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('admin');
  },
  actions: {
    saveUser(params) {
      var newUser = this.store.createRecord('admin', params);
      newUser.save();
      this.transitionTo('admin');
    }
  }
});
