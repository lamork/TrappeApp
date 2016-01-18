import Ember from 'ember';

export default Ember.Route.extend({

  actions: {
    signIn: function(provider) {
      var controller = this;
      controller.get("session").login(provider).then(function() {
        // Persist your users details.
      }, function() {
        // User rejected authentication request
      });
    },
    signOut:function(){
      var controller = this;
      controller.get("session").logout();
      this.transitionTo('login');
    }
  }

});
