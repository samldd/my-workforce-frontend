import DS from 'ember-data';

export default DS.Model.extend({
  measurements: DS.hasMany('measurement'),
});
