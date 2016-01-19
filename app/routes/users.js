import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel() {
    if (this.get('session').isAuthenticated === false) {
      this.transitionTo('registerwalkedstaircase');
    }
  },
  model: function() {
    return this.store.query('user', {orderBy: 'created'});
  }});
