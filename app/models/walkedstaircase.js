import DS from 'ember-data';

export default DS.Model.extend({
  user: DS.belongsTo('user'),
  dateWalked: DS.attr('date', {
      defaultValue() { return new Date(); }
    }),
  created: DS.attr('date', {
      defaultValue() { return new Date(); }
    })
});
