import Ember from 'ember';

export default Ember.Controller.extend({

  actions: {
    addProject: function () {
      var name = this.get('name');
      var start = new Date(this.get('start'));
      var end = new Date(this.get('end'));
      var description = this.get("description");

      var newProject = this.store.createRecord('project', {
        name: name,
        start: start,
        end: end,
        description: description,
        requiredSkills: []
      });

      newProject.save();

      this.setProperties({
        name: '',
        start: '',
        end:'',
      })
    },

    deleteTask: function(id){
			this.store.findRecord('project', id).then(function(project){

				project.deleteRecord();

				project.save();

			});
		}
  }
});
