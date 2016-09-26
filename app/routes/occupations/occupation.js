import Ember from 'ember';

export default Ember.Route.extend({

  model: function (params) {
    console.log("routes/occupations/occupation.js - model");
    return this.get('store').peekRecord('occupation', params.id);
  }

});
