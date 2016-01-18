import Ember from 'ember';
export default Ember.Controller.extend({

  actions: {
    registerNewWalkedStaircase: function() {
      var walkedstaircaseModel = this.get('model');
      var user = this.get('session.currentUser');

      var newWalkedstaircase = this.store.createRecord('walkedstaircase', {
        dateWalked: walkedstaircaseModel.dateWalked,
        created: walkedstaircaseModel.created,
        user: user
      });

      user.get('allWalkedStaircases').pushObject(newWalkedstaircase);

      newWalkedstaircase.save().then(function() {
        user.save();
        $("#status span").text("Trappen er registrert")
        .show().parent().fadeIn()
        .delay(1000).fadeOut('slow', function() {
          $("#registerStatus span").text('');
        });
      });
    }
  }});
