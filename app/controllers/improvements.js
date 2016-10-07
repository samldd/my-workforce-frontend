import Ember from 'ember';

export default Ember.Controller.extend({

  employee: Ember.computed('model', function(){
    var measurements = this.get('model.employee');
    var data = [];
    if (measurements === undefined){
      return data;
    }
    measurements.forEach(function(m){
      data.push({className:m.get('name'), value:m.get('count'), occ:m.get('occupation')});
    });
    return {children:data};
  }),

  skill: Ember.computed('model', function(){
    var measurements = this.get('model.skill');
    var data = [];
    if (measurements === undefined){
      return data;
    }
    measurements.forEach(function(m){
      data.push({className:m.get('name'), value:m.get('count')});
    });
    return {children:data};
  }),


});
