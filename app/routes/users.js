import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel() {
    if (this.get('session').isAuthenticated === false) {
      this.transitionTo('login');
    }
  },
  model: function() {
    return this.store.findAll('user');
  }});
