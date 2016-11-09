import Ember from 'ember';
import d3 from 'd3';

export default Ember.Route.extend({
  model: function() {
    // var goal = ""; //NUMBER
    // var usd_pledged = ""; //NUMBER
    // var currency = "";
    // var currency_symbol = "";
    // var state = "";
    // var photo = "";
    // var name = "";
    // var blurb = "";
    // var deadline = ""; //NUMBER
    // var created_at = ""; //NUMBER
    // var launched_at = ""; //NUMBER
    // var locationShortName = ""; //Property of

    var url = 'https://www.kickstarter.com/projects/search.json?term=Tabletop&sort=end_date&per_page=40';
  //   return Ember.$.getJSON(url).then(function(responseJSON) {
  //     var returnArray = {'projects': responseJSON.projects[0]};
  //     return returnArray;
  //  });

   return Ember.$.getJSON(url).then(function(responseJSON) {
      return responseJSON.projects[0];
    });
  },

  actions: {

    buildSVG(model) {
      console.log( parseFloat(model.usd_pledged) );

      var dataset = [ 200, 150 ];

      var w = 200;
      var h = 400;
      var barPadding = 10;

      var svg = d3.select("#chart")
            .append("svg")
            .attr("width", w)
            .attr("height", h);

      var text = d3.select("#chart").append("p").text("Goal: " + model.goal + " " + "Pledged: " + model.usd_pledged)
            .append("rect")

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

    },
  }
});
