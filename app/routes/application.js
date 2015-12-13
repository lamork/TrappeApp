// app/routes/application.js
import Ember from 'ember';
export default Ember.Route.extend({
  beforeModel: function() {
    return this.get("session").fetch().catch(function() {
      console.log('No session exist')
    });
  },
  actions: {
    signIn: function(provider) {
      this.get("session").open("firebase", { provider: provider, scope: 'email'}).then(function(data) {
        console.log(data);
      });
    },
    signOut: function() {
      this.get("session").close().then(function() {
        console.log('Session closed')
      });
    }
  }
});
