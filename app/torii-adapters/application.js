import Ember from 'ember';
import ToriiFirebaseAdapter from 'emberfire/torii-adapters/firebase';

export default ToriiFirebaseAdapter.extend({
  firebase: Ember.inject.service()
});

export default Ember.Object.extend({
  firebase: Ember.inject.service(),
  store: Ember.inject.service(),

  /**
  * Executed after Firebase authentication.
  *
  * Find or create the user based on the Firebase `authData`
  *
  * @param  {Object} authData
  * @return {Promise<Object>} Updated session info
  */
  open(authData) {
    return this._findOrCreateUser(authData)
    .then((user) => {
      return { currentUser: user };
    });
  },

  /**
  * Fetch an existing Firebase auth session and place into `session.currentUser`
  *
  * @return {Promise<Object>} Updated session info
  */
  fetch() {
    let ref = this.get('firebase');
    let authData = ref.getAuth();

    if (!authData) {
      return Ember.RSVP.Promise.reject(new Error('No Firebase session found'));
    }

    return this._findOrCreateUser(authData)
    .then((user) => {
      return { currentUser: user };
    });
  },

  /**
  * Teardown a session. Remove the `session.currentUser`.
  *
  * @return {Promise<Object>} Updated session info
  */
  close() {
    this.get('firebase').unauth();
    return Ember.RSVP.Promise.resolve({ currentUser: null });
  },

  /**
  * Find the user with the given `authData`, create if not found
  *
  * @param  {Object} authData
  * @return {Promise<Object>} The user
  */
  _findOrCreateUser(authData) {
    let store = this.get('store');

    return store.find('user',authData.uid)
    .catch(() => {
      let newUser = store.createRecord('user', this.extractUserProperties(authData));
      newUser.save();
      return newUser;
    });
  },

  extractUserProperties(authData) {
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
});
