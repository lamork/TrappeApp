// app/routes/application.js
import Ember from 'ember';
export default Ember.Route.extend({
  beforeModel: function() {
    return this.get("session").fetch().catch(function() {
    });
  },
  actions: {
    signIn: function(provider) {
      this.get("session").open("firebase", { provider: provider}).then(function(data) {
        this.transitionTo('users');
      }.bind(this));
    },
    signOut: function() {
      this.get("session").close().then(function() {
        this.transitionTo('login');
      }.bind(this));
    },
    accessDenied: function() {
      this.transitionTo('login');
    }
  }
});
