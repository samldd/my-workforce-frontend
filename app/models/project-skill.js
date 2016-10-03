import DS from 'ember-data';

export default DS.Model.extend({

  requiredDays: DS.attr('number'),

  skill: DS.belongsTo('skill'),

  project: DS.belongsTo('project'),

  employee: DS.hasMany('project-skill'),

});
