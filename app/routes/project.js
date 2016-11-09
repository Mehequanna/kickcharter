import Ember from 'ember';
import d3 from 'd3';

export default Ember.Route.extend({

  //Add Params to Argument of model function if we want to search by a term

  model: function() {
    var url = 'https://www.kickstarter.com/projects/search.json?term=Game&sort=popularity&per_page=40';
      return Ember.$.getJSON(url).then(function(responseJSON) {
        return responseJSON.projects;
    });
  }, //End Model

  actions: {

    buildSVG(model) {
      console.log( 'Pledged:' + model[1].usd_pledged + ', Goal:' + model[1].goal );
      console.log( 'Project:' + model[1].name);

      //Width and height
      var w = 500;
      var h = 100;
      var barPadding = 1;

      var pledged = parseInt(model[1].pledged * model[1].static_usd_rate);
      var goal = parseInt(model[1].goal * model[1].static_usd_rate);

      var unFunded = (pledged / goal) * 100;
      var funded = (goal / pledged) * 100;

      var dataset = [ 50, 50];

      //sets high number as 100(equal to div height), low number as % of high number
      if (pledged >= goal) {
         dataset = [ funded, 100];
      } else if (goal > pledged) {
        dataset = [unFunded, 100];
      }


        //Create SVG element
        var svg = d3.select("#chart")
        .append("svg")
        .attr("width", w)
        .attr("height", h);

        svg.selectAll("rect")
        .data(dataset)
        .enter()
        .append("rect")
        .attr("x", function(d, i) {
          return i * (w / dataset.length);
        })
        .attr("y", function(d) {
          return h - (d * 4);
        })
        .attr("width", w / dataset.length - barPadding)
        .attr("height", function(d) {
          return d * 4;
        })
        .attr("fill", function(d) {
          return "rgb(0, 0, " + (d * 10) + ")";
        });

        svg.selectAll("text")
        .data(dataset)
        .enter()
        .append("text")
        .text(function(d) {
          return d;
        })
        .attr("text-anchor", "middle")
        .attr("x", function(d, i) {
          return i * (w / dataset.length) + (w / dataset.length - barPadding) / 2;
        })
        .attr("y", function(d) {
          return h - (d * 4) + 14;
        })
        .attr("font-family", "sans-serif")
        .attr("font-size", "11px")
        .attr("fill", "white");

    },
  }
}); //End Route
