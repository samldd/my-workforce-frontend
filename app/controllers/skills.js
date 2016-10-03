import Ember from 'ember';

export default Ember.Controller.extend({

  select: null,

  store: Ember.inject.service(),

  actions: {

    onSelect (theSkill){
      console.log("controller/skills.js - onSelect");
      this.set('select', theSkill);
      this.transitionToRoute('skills.skill.timeline', theSkill.get('id'));
    },

    handleKeydown(dropdown, e) {
          //if (e.keyCode !== 13) { return; }
          console.log("controller/skills.js - handleKeydown");
          let text = e.target.value;
          let self = this;
          if (text.length > 0) {
              return this.get('store').query('skill', {filter:text}).then( function(skills){
                return self.set('model',skills);
            });
          }
    },

  }
});
