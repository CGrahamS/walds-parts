import Ember from 'ember';

export default Ember.Service.extend({
  total: 0,
  items: [],
  add(item) {
    this.get('items').pushObject(item);
  },
});
