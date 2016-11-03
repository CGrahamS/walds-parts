import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    verifyUser() {
      var params = {
        username: this.get('username'),
        password: this.get('password')
      }
      this.sendAction('verifyUser', params);
    }
  }
});
