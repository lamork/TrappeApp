import DS from 'ember-data';

export default DS.Model.extend({
  user: DS.belongsTo('user'),
  name: DS.attr('string'),
  created: DS.attr('date'),
  lastLogin: DS.attr('date'),
});
