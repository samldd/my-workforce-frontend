import Ember from 'ember';

export default Ember.Controller.extend({

  select: null,

  store: Ember.inject.service(),

  ajax: Ember.inject.service(),

  skills: Ember.computed(function () {
    this.get('ajax').request('/allSkills/').then(
      (res) => {
        this.get('store').pushPayload(res);
        this.set('skills', this.get('store').findAll('skill'));
      }
    );
  }),

  actions: {

    // kijk naar emtasks voor het aanpassen van project gegevens.

    addSkill (){
      console.log("controller/project/edit.js - addSkill");
      var project = this.get('model');
      var skill = this.get("store").peekRecord("skill",this.get("select").id);
      var days = this.get('days');

      var newSkill = this.get('store').createRecord('project-skill', {
        requiredDays: days,
        skill: skill,
        project: project,
      });
      newSkill.save();

      this.set('select', null);
      this.set('days', null);
    },

    onSelect (theSkill){
      console.log("controller/project/edit.js - onSelect");
      this.set('select', theSkill);
    },

    handleKeydown(dropdown, e) {
          if (e.keyCode !== 13) { return; }
          console.log("controller/project/edit.js - handleKeydown");
          let text = e.target.value;
          let self = this;
          if (text.length > 0) {
            this.get('ajax').request('/allSkills/', {data:{filter: text}}).then(
              (res) => {
                  self.get('store').pushPayload(res);

                  var skills = res.data.map(function(result){
                    Object.keys(result.attributes).map(function(key){
                      result[key] = result.attributes[key];
                      });
                    return result;
                  });

                self.set("skills", skills);

                }
            );
          }
    },

    deleteSkill(skillId){
      this.get("store").findRecord('project-skill', skillId).then(function(skill) {
        skill.deleteRecord();
        skill.save();
      });
    },
  }

});
