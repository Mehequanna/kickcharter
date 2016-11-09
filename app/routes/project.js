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

      var sampleSVG = d3.select("#chart")
              .append("svg")
              .attr("width", 100)
              .attr("height", 100);

          sampleSVG.append("circle")
              .style("stroke", "gray")
              .style("fill", "white")
              .attr("r", parseFloat(model[0].usd_pledged) / 300)
              .attr("cx", 50)
              .attr("cy", 50)
              .on("mouseover", function(){d3.select(this).style("fill", "aliceblue");})
              .on("mouseout", function(){d3.select(this).style("fill", "white");});



    },


  }
}); //End Route
