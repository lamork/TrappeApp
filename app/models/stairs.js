import DS from 'ember-data';

export default DS.Model.extend({
  date: DS.attr('date', {
      defaultValue() { return new Date(); }
    }),
  created: DS.attr('date', {
      defaultValue() { return new Date(); }
    })
});
