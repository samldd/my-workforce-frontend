import Ember from 'ember';

export default Ember.Controller.extend({

  select: null,

  store: Ember.inject.service(),

  actions: {

    onSelect (theOcc){
      console.log("controller/occupations.js - onSelect");
      this.set('select', theOcc);
      this.transitionToRoute('occupations.occupation.bubble', theOcc.get('id'));
    },

    handleKeydown(dropdown, e) {
          if (e.keyCode !== 13) { return; }
          console.log("controller/occupations.js - handleKeydown");
          let text = e.target.value;
          let self = this;
          if (text.length > 0) {
            this.get('store').query('occupation', {'filter':text}).then(function(occupations){
              self.set('model',occupations);
            });
          }
    },

  }
});
