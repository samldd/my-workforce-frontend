import Ember from 'ember';

export default Ember.Controller.extend({

  store: Ember.inject.service(),

  ajax: Ember.inject.service(),

  empl: Ember.computed('model', function(){
    return this.get('ajax').request('/matches/' , {data: {id: this.get('store').peekRecord('project-skill',this.get('model').id).get('skill').get('id')}} ).then(
      (res) => {
        this.get('store').pushPayload(res);
        var employees = res.data.map(function(result){
          Object.keys(result.attributes).map(function(key){
            result[key] = result.attributes[key];
          });
          return result;
        });
        console.log(employees);
        return employees;
      }
    );
  }),

  actions:{
    foo: function (employee) {
      var emp = this.get('store').peekRecord('employee',employee.id);
      var skill = this.get('store').peekRecord('project-skill', this.get('model').id);

      skill.get('employeeProject').then(function (prev) {
        if(prev != null){
        prev.deleteRecord();
        prev.save();
        }
      });


      var newEmp = this.store.createRecord('employee-project', {
        start: new Date(),
        end: new Date(),
        projectSkill: this.get('model'),
        employee: emp,
      });

      newEmp.save();
    }
  }

});
