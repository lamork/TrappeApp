import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel() {
    if (this.get('session').isAuthenticated === false) {
      this.transitionTo('login');
    }
  },
model: function() {
  return {
      dateWalked: new Date(),
      created: new Date()
    };
}});
