import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  description: DS.attr(),
  price: DS.attr(),
  stock: DS.attr(),
  rating: DS.attr(),
  image: DS.attr()
});
