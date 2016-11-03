import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('product', {path: '/product/:product_id'});
  this.route('shopping-cart');
  this.route('admin');
});

export default Router;
