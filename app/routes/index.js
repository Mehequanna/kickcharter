import Ember from 'ember';
import d3 from 'd3';

export default Ember.Route.extend({
  model: function() {
    var url = 'https://www.kickstarter.com/projects/search.json?term=Tabletop&sort=end_date&per_page=40';
    return Ember.$.getJSON(url).then(function(responseJSON) {
      return responseJSON.projects[4];
    });
  },

  actions: {

    buildSVG(model) {
      console.log( parseFloat(model.usd_pledged) );
      d3.select("#chart").clear();
      //width and height
      var w = 200;
      var h = 100;
      var barPadding = 10;

      var pledged = parseInt(model.pledged * model.static_usd_rate);
      var goal = parseInt(model.goal * model.static_usd_rate);

      var unFunded = (pledged / goal) * 100;
      var funded = (goal / pledged) * 100;

      var dataset = [ 50, 50];

      //sets high number as 100(equal to div height), low number as % of high number
      if (pledged >= goal) {
         dataset = [funded, 100];
      } else if (goal > pledged) {
        dataset = [100, unfunded];
      }

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
