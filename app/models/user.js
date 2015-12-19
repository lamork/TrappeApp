import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  provider: DS.attr('string'),
  created: DS.attr('date'),
  lastLogin: DS.attr('date'),
  allWalkedStaircases: DS.hasMany('walkedstaircase'),

  sortedModules: Ember.computed.sort('allWalkedStaircases.@each.dateWalked', function (mod1, mod2) {
      return mod1.get('dateWalked') - mod2.get('dateWalked') 
  }),

});
