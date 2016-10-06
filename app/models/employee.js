/**
 * Created by sam on 03.10.16.
 */


export default DS.Model.extend({

  name: DS.attr('string'),

  projects: DS.hasMany('employee-project')

});
