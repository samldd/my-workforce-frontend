import Ember from 'ember';

export default Ember.Component.extend({

  width: 800,
	height: 400,
  yAxisWidth: 30,
	xAxisHeight: 30,
  data: null,

  draw: function() {
    if (this.get('data') == null) {
      return;
    }

    var height = this.get('height');
    var width = this.get('width');

    d3.select("#timeline").remove();

    var svg = d3.select("#graph").append("svg")
      .attr("id", "timeline")
      .attr("width", width + 30 + 30)
      .attr("height", height + 30 + 50)
      .append("g")
      .attr("transform", "translate(" + 40 + "," + 30 + ")");

    let data = this.get('data');

  },

});

