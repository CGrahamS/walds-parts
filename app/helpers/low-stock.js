import Ember from 'ember';

export function lowStock(params) {
  var product = params[0];
  if(product.get('stock') < 10) {
    return Ember.String.htmlSafe('<h4>LOW STOCK</h4>');
  }
}

export default Ember.Helper.helper(lowStock);
