import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  provider: DS.attr('string'),
  created: DS.attr('date'),
  lastLogin: DS.attr('date'),
  allWalkedStaircases: DS.hasMany('walkedstaircase')
});
