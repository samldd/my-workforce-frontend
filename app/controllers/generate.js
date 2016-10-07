import Ember from 'ember';

export default Ember.Controller.extend({

  ajax: Ember.inject.service(),

  response: null,

  actions: {

    generate (){
        return this.get('ajax').request('/generateCompany/').then(
          (res) =>
            this.set('response', res)
          )
    },

  }
});