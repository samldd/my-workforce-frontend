import Ember from 'ember';

export default Ember.Route.extend({

  model: function (params) {
    console.log("routes/project/edit.js - model");
    return this.store.findRecord('project', params.pid);
  },

});
