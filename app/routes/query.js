import Ember from 'ember';

export default Ember.Route.extend({

  model: function(params) {
    var goal = ""; //NUMBER
    var pledged = ""; //NUMBER
    var currency = "";
    var currency_symbol = "";
    var state = "";
    var photo = "";
    var name = "";
    var blurb = "";
    var deadline = ""; //NUMBER
    var created_at = ""; //NUMBER
    var launched_at = ""; //NUMBER
    var locationShortName = ""; //Property of

    var url = 'https://www.kickstarter.com/projects/search.json?search=&term=Tabletop%20Games';
    return Ember.$.getJSON(url).then(function(responseJSON) {
      birthday = responseJSON.results[0].birthday;

      var returnArray = {'legislators': responseJSON.results, 'birthday': birthday};

      return returnArray;
   });
  }

});
