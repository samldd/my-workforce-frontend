import Ember from 'ember';

export default Ember.Component.extend({

  width: 800,
	height: 400,
  yAxisWidth: 30,
	xAxisHeight: 30,
  data: null,

  didInsertElement: function () {
    this.draw();
  },

  draw: function(){
    if (this.get('data') == null){
      return;
    }

	  var height = this.get('height');
    var width = this.get('width');

    try{
      d3.select("#timeline").remove();
    }catch(err){}


    var svg = d3.select("#graph").append("svg")
      .attr("id", "timeline")
      .attr("width", width + 30 + 30)
      .attr("height", height + 30 + 50)
      .append("g")
      .attr("transform", "translate(" + 40 + "," + 30 + ")");

    let data = this.get('data');

    var x = d3.time.scale()
    .range([0, width]);

    var y = d3.scale.linear()
    .range([height, 0]);

    x.domain(d3.extent(data, function(d) { return d.x; }));
    y.domain(d3.extent(data, function(d) { return d.y; }));

    var xAxis = d3.svg.axis().scale(x).orient("bottom");
    var yAxis = d3.svg.axis().scale(y).orient("left");

    var line = d3.svg.line()
    .x(function(d) { return x(d.x); })
    .y(function(d) { return y(d.y); });

    svg.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height + ")")
      .call(xAxis);

    svg.append("g")
      .attr("class", "y axis")
      .call(yAxis)
    .append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", 15)
      .attr("dy", ".71em")
      .attr("text-anchor", "middle")
      .text("occurences");

    svg.append("path")
      .datum(data)
      .attr("class", "line")
      .attr("d", line);

  }.observes('data.[]').on('init'),

});
