import Ember from 'ember';

export default Ember.Component.extend({

  width: 500,
	height: 400,
  yAxisWidth: 30,
	xAxisHeight: 30,
  data: null,

  didInsertElement: function() {
    console.log("start");

    if (this.get('data') == null) {
      return;
    }

    var height = this.get('height');
    var width = this.get('width');

    var diameter = 500,
        format = d3.format(",d"),
        color = d3.scale.category20c();

    var bubble = d3.layout.pack()
                  .sort(null)
                  .size([diameter, diameter])
                  .padding(1.5);

    var svg = d3.select("#" + this.get('elementId')).append("svg")
      .attr("id", "bubble")
      .attr("width", diameter)
      .attr("height", diameter)
      .attr("class", "bubble");

    var data = this.get('data');

    var node = svg.selectAll(".node")
      .data(bubble.nodes(data)
      .filter(function(d) { return !d.children; }))
    .enter().append("g")
      .attr("class", "node")
      .attr("transform", function(d) { return "translate(" + d.x + "," + d.y + ")"; });

    node.append("circle")
      .attr("r", function(d) { return d.r; })
      .style("fill", function(d) { return color(d.occ); });

    node.append("text")
      .attr("dy", ".3em")
      .attr("text-anchor", "middle")
      .text(function(d) { return d.className.substring(0, d.r / 3); });

    console.log("executed");
  },



});

