import DS from 'ember-data';

export default DS.Model.extend({
  date: DS.attr('date'),
  value: DS.attr('number'),
});
