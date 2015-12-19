import Ember from 'ember';

export default Ember.Controller.extend({

  actions: {remove: function(walkedstaircase){
    console.log(walkedstaircase);
    walkedstaircase.deleteRecord();
   walkedstaircase.save();
  }

}});
