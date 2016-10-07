import Ember from 'ember';

export default Ember.Controller.extend({

  date: null,

  ajax: Ember.inject.service(),

  data: Ember.computed('date', function(){
    if(this.get('date') === null){
      return;
    }
    return this.get('ajax').request('/bubble/', {data: {date:this.get('date')}}).then(
       (res) => {
        var data = [];
        res.data.forEach(function(m){
          data.push({className:m.attributes.name, value:m.attributes.count});
        });
        return {children:data};
      }
    );
  }),

  actions:{

     changeDate: function () {
        this.set('date', this.get('theDate'));
     }

  }

});
