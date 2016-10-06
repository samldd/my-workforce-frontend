/**
 * Created by sam on 03.10.16.
 */

export default DS.Model.extend({

  start: DS.attr('date'),

  end: DS.attr('date'),

  projectSkill: DS.belongsTo('project-skill'),

  employee: DS.belongsTo('employee'),

});
