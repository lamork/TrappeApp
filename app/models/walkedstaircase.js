import DS from 'ember-data';

export default DS.Model.extend({
  user: DS.belongsTo('user'),
  dateWalked: DS.attr('date'),
  created: DS.attr('date')
});
