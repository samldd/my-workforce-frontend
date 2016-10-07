import Ember from 'ember';
import DS from 'ember-data';

export default DS.Model.extend({

  name: DS.attr('string'),

  slug: Ember.computed('name', function() {
    console.log("models/skills.js - slug");
    return this.get('name').dasherize();
  }),
});
