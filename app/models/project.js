import DS from 'ember-data';

export default DS.Model.extend({

  name: DS.attr('string'),

  description: DS.attr('string'),

  start: DS.attr('date'),

  end: DS.attr('date'),

  requiredSkills: DS.hasMany('project-skill'),

});
