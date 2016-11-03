import Ember from 'ember';

export default Ember.Route.extend({
  adminPortal: Ember.inject.service(),
  model() {
    return this.get('adminPortal');
  },
  actions: {
    verifyUser(params) {
      var checkUser = function(username, password) {
        if (username === params.username && password === params.password) {
          alert("Logged in!")
          toggleAdmin();
          this.transitionTo('index');
        } else {
          alert("Log in failed...")
        }
      }
      this.store.query('admin', {
        orderBy: 'username',
        equalTo: params.username
      }).then(function(user) {
        var username = user.content[0]._data.username;
        var password = user.content[0]._data.password;
        checkUser(username, password);
      })
    }
  }
});
