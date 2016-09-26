import Ember from 'ember';

export default Ember.Route.extend({

  model: function(){
    console.log("routes/occupations.js - model");
    return this.store.findAll('occupation');
  },

});
