import Ember from 'ember';

export default Ember.Route.extend({

  model: function () {
    console.log("routes/project.js");
    return this.store.findAll('project');
  }

});
