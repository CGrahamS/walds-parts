import Ember from 'ember';

export default Ember.Service.extend({
  isAdmin: false,
  adminLog() {
    if (this.isAdmin === false) {
      console.log(this.isAdmin);
      this.set('isAdmin', true);
      console.log(this.isAdmin);
    } else if (this.isAdmin === true) {
      console.log(this.isAdmin);
      this.set('isAdmin', false);
      console.log(this.isAdmin);
    }
  }
});
