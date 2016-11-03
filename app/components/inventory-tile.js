import Ember from 'ember';

export default Ember.Component.extend({
  totalStockValue: Ember.computed('product.stock', 'product.price', function() {
    return this.get('product.stock') * this.get('product.price');
  })
});
