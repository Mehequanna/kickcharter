import Ember from 'ember';
import d3 from 'd3';

export default Ember.Route.extend({

  //Add Params to Argument of model function if we want to search by a term

  model: function() {
    var url = 'https://www.kickstarter.com/projects/search.json?term=Tabletop&sort=end_date&per_page=40';
      return Ember.$.getJSON(url).then(function(responseJSON) {
        return responseJSON.projects;
    });
  }, //End Model

  actions: {

    buildSVG(model) {
      console.log( parseFloat(model[0].usd_pledged) );

      var dataset = [ 200, 150 ];

      var w = 100;
      var h = 400;
      var barPadding = 1;

      var svg = d3.select("#chart")
            .append("svg")
            .attr("width", w)
            .attr("height", h);

      svg.selectAll("rect")
        .data(dataset)
        .enter()
        .append("rect")
        .attr("x", function(d, i) {
          return i * 5;  //Bar width of 20 plus 1 for padding
        })
        .attr("x", function(d, i) {
          return i * (w / dataset.length);
        })
        .attr("width", w / dataset.length - barPadding)
        .attr("height", function(d) {
          return d * 4;
        })
        .attr("y", function(d) {
          return h - d;  //Height minus data value
        })
        .attr("height", function(d) {
          return d;  //Just the data value
        })
        .attr("fill", function(d) {
          return "rgb(0, 0, " + (d * 10) + ")";
        });

        svg.selectAll("text")
         .data(dataset)
         .enter()
         .append("text")

    },
  }
}); //End Route
