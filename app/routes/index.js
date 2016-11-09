import Ember from 'ember';

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

    var url = 'https://www.kickstarter.com/projects/search.json?term=Tabletop';
  //   return Ember.$.getJSON(url).then(function(responseJSON) {
  //     var returnArray = {'projects': responseJSON.projects[0]};
  //     return returnArray;
  //  });

   return Ember.$.getJSON(url).then(function(responseJSON) {
      return responseJSON.projects[0];
    });
  }
});
