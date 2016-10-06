import Ember from 'ember';

export default Ember.Controller.extend({

  actions: {

    deleteSkill(skillId){
      this.get("store").findRecord('project-skill', skillId).then(function(skill) {
        skill.deleteRecord();
        skill.save();
      });
    },
  }

});

