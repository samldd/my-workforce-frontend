import Ember from 'ember';

export default Ember.Route.extend({

  model: function (params) {
    console.log("routes/skills/skill.js - model");
    return this.get('store').peekRecord('skill', params.id);
  }

});
