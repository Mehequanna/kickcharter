import Ember from 'ember';

export default Ember.Route.extend({

  model: function() {
    // var goal = ""; //NUMBER
    // var pledged = ""; //NUMBER
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

    var url = 'https://www.kickstarter.com/projects/search.json?term=Tabletop&sort=end_date&per_page=40'; //specific to name/blurb
    return Ember.$.getJSON(url).then(function(responseJSON) {
      // console.log('js response: '+responseJSON.projects);
      console.log('js response length: '+responseJSON.projects.length);
      var returnArray = {'projects': responseJSON.projects};
      console.log('js returnArray: '+returnArray);
      return returnArray;
   });
  }

});
