import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {remove: function(walkedstaircase){
    walkedstaircase.deleteRecord();
    walkedstaircase.save();
  }
}});
