import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  name: DS.attr('string'),
  provider: DS.attr('string'),
  created: DS.attr('date'),
  allWalkedStaircases: DS.hasMany('walkedstaircase'),
  sortedModules: Ember.computed.sort('allWalkedStaircases.@each.dateWalked', function (mod1, mod2) {
      return mod2.get('dateWalked') - mod1.get('dateWalked');
  }),
  number_of_people: function(){
   return this.get('sortedModules.firstObject');
 }.property('sortedModules')

});
