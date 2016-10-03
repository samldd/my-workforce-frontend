import Ember from 'ember';

export default Ember.Route.extend({
  ajax: Ember.inject.service(),

  store: Ember.inject.service(),

  model: function (params) {
    console.log(  "routes/improvements.js - model");
    return this.get('ajax').request('/improvements/').then(
        (res) => {
          this.get('store').pushPayload(res);

          return Ember.RSVP.hash({
            employee: this.get('store').peekAll('employee-improvement'),
            skill: this.get('store').peekAll('skill-improvement')
           });
        }
      );
  }
});
