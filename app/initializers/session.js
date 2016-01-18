import Ember from "ember";
import config from '../config/environment';

var session = Ember.Object.extend({
  firebase: Ember.inject.service(),
  store: Ember.inject.service(),
  ref: new Firebase(config.firebase),
  addFirebaseCallback: function() {
    var session = this;
    this.get('ref').onAuth(function(authData) {
      if (authData) {
        let store = session.get('store');

        store.find('user',authData.uid).then((user) => {
          console.log(user.id, " is already authenticated");
          session.set("currentUser", user);
        }).catch(() => {
          let newUser = store.createRecord('user', extractUserProperties(authData));
          newUser.save();
          console.log(newUser, " is created and authenticated");
          session.set("currentUser", newUser);
        });
        session.set("isAuthenticated", true);

      } else {
        session.set("isAuthenticated", false);
        session.set("currentUser", null);
      }
    });
  }.on("init"),

  login: function(provider) {
    return new Promise((resolve, reject) => {
      this.get("ref").authWithOAuthRedirect(provider, function(error, user) {
        if (user) {
          console.log("Authenticated successfully with payload:", user);
          resolve(user);
        } else {
          console.log("Login Failed!", error);
          reject(error);
        }
      });
    });
  },

  logout:function(){
    this.get("ref").unauth();
    console.log("Logged out!");
  }
});

export default {
  name: "Session",
  initialize: function(app) {
    app.register("session:main", session);
    app.inject("controller", "session", "session:main");
    app.inject("route", "session", "session:main");
  }
};

function extractUserProperties(authData) {
  var name = 'Unknown';
  var userData = authData[authData.provider];
  var providerName = authData.provider;

  if (userData.displayName) {
    name = userData.displayName;
  } else if (userData.username) {
    name = userData.username;
  }

  var user = {
    id: authData.uid,
    name: name,
    provider: providerName,
    created: new Date(),
  };

  return user;
}
