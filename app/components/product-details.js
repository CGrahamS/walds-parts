import Ember from 'ember';

export default Ember.Component.extend({
  shoppingCart: Ember.inject.service(),
  actions: {
    addToCart(item) {
      var total = this.get('shoppingCart.total');
      total += item.get('price');
      var stock = item.get('stock');
      --stock;
      console.log(item.get('stock'));
      item.set('stock', stock);
      console.log(item.get('stock'));
      this.set('shoppingCart.total', total);
      this.get('shoppingCart').add(item);
    }
  }
});
