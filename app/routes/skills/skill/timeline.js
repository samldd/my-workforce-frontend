// app/routes/skills/skill/timeline.js

import Ember from 'ember';

export default Ember.Route.extend({

  ajax: Ember.inject.service(),

  store: Ember.inject.service(),

  model: function () {
    return this.get('ajax').request('/timeline/', {data: {skillid: this.modelFor('skills.skill').get('id')}}).then(
        (res) => {
          this.get('store').pushPayload(res);
          return this.get('store').peekRecord('timeline', res.data.id);
        }
      );
  }

});
