import Ember from 'ember';

export default Ember.Route.extend({
model: function() {
  return {
      dateWalked: new Date(),
      created: new Date()
    };
}});
