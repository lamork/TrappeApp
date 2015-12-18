import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {

    var user = this.get('session.currentUser');
    // return this.store.find('walkedstaircase', user);
    return this.store.query('walkedstaircase', {user: user.id});

  }});
