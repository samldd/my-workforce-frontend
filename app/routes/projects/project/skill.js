import Ember from 'ember';

export default Ember.Route.extend({

  model: function (params) {
    console.log("routes/projects/project/skill.js - model");
    return this.store.findRecord('project-skill',params.Sid);
  },

});
