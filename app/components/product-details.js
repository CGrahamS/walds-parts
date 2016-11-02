import Ember from 'ember';

export default Ember.Component.extend({
  shoppingCart: Ember.inject.service(),
  actions: {
    addToCart(item) {
      var total = this.get('shoppingCart.total');
      total += item.get('price');
      this.set('shoppingCart.total', total);
      this.get('shoppingCart').add(item);
    }
  }
});
