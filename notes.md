# Kickcharter
Group Project - Epicodus JavaScript - Fall 2016
By Caleb Paul, J. Ryan Conklin, Stephen Emery and Zach Richards


## Summary
The Kickcharter app is an interactive charting website that pulls data from Kickstarter in real time.
Minimum Viable Product (MVP)
Display a Track of Projects to Goal


## API

Kickstarter (not an API, But a simple request): https://www.kickstarter.com/projects/search.json?search=&term=Tabletop%20Games
https://www.kickstarter.com/projects/search.json
We can iterate through pages by using:
https://www.kickstarter.com/projects/search.json?search=board&term=Tabletop%20Games&page=3
See the last parameter


Parameters we can use for search ignore [] and fill with info:
* page=[#]
* term=[word1]%20[word2]
* search=[word]
* sort= [newest, end_date, popularity, most_funded, most_backed]
* category_id=[#]
* woe_id=[#]   this is a place
*Maybe use this woeid api to have people search a place and get the woeid to pass to the kickstarter search and show results by location: https://developer.yahoo.com/geo/geoplanet/guide/api-reference.html*

https://www.kickstarter.com/discover/advanced?category_id=1&woe_id=23424977&sort=newest&seed=2464274&page=1


## Data Viz Ideas
* Show basic info: Project photo, blurb, category, creator, creator photo, project url, rewards
* Charts and colors to show % funded and give special characters or colors for over funded projects.
* Show on map kickstarter projects by location. Can do US and just a globe for everywhere else? Use woeId?


## Core Technologies
* Ember


## Dependencies
Ember Bootstrap `ember install ember-bootstrap`

Ember Moment `ember install ember-moment`

Ember d3 `ember install ember-cli-d3`
