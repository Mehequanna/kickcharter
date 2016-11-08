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
      // console.log( parseInt(model[0].usd_pledged) );
      var chart = d3.select("#chart");
      var div = chart.append('div'); 
      div.html(model[0].blurb);


    },


  }
}); //End Route
