/**
 * Created by sam on 21.09.16.
 */
import Ember from 'ember';

export default Ember.Controller.extend({

  graphdata: Ember.computed('model', function(){
    console.log('new data');
    var measurements = this.get('model.measurements');
    var data = [];
    if (measurements === undefined){
      return data;
    }
    measurements.forEach(function(m){
      data.push({x:m.get('date'), y:m.get('value')});
    });
    return data;
  }),
});
