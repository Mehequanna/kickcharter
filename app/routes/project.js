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
      console.log( 'Pledged:' + model[0].usd_pledged + ', Goal:' + model[0].goal );

      //Width and height
      var w = 500;
      var h = 100;
      var barPadding = 1;

      var dataset = [ (parseInt(model[0].usd_pledged) / 2500), (model[0].goal / 2500)];

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
    },
  }
}); //End Route
