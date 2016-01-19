import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {remove: function(walkedstaircase){
    walkedstaircase.deleteRecord();
    walkedstaircase.save();

    $("#status span").text("Din trappetur slettet")
    .show().parent().fadeIn()
    .delay(1000).fadeOut('slow', function() {
      $("#registerStatus span").text('');
    });
  }
}});
