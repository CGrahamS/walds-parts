import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    saveUser(){
      var params = {
        username: this.get('username'),
        password: this.get('password')
      };
      this.sendAction('saveUser', params);
    }
  }
});
