
// Required modules and files
require("dotenv").config();
var fs = require("fs");
var keys = require("./key.js");
var request = require('request');
/*var Twitter = require('twitter');
var Spotify = require('node-spotify-api');
//Modular variables
var spotify = new Spotify(keys.spotify);
var client = new Twitter(keys.twitter);

/* general request

request('http://www.google.com', function (error, response, body) {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.
});
//`my-tweets`

 
var client = new Twitter({
  consumer_key: '',
  consumer_secret: '',
  access_token_key: '',
  access_token_secret: ''
});
 
var params = {screen_name: 'nodejs'};
client.get('statuses/user_timeline', params, function(error, tweets, response) {
  if (!error) {
    console.log(tweets);
  }
});
 //`spotify-this-song`
 
 
 var spotify = new Spotify({
   id: < your spotify client id>,
   secret: <your spotify client secret>
 });
  
 spotify.search({ type: 'track', query: 'All the Small Things' }, function(err, data) {
   if (err) {
     return console.log('Error occurred: ' + err);
   }
  
 console.log(data); 
 });

 
 // `movie-this
  else if (process.argv[2] == "movie"){  */

var movieReq = process.argv[3];
var queryUrl = "http://www.omdbapi.com/?t=" + movieReq + "&y=&plot=short&apikey=trilogy";

console.log(queryUrl);

//if (process.argv[3] !== undefined ) {
    request(queryUrl, function (error, response, body) {
    console.log("Title: " + JSON.parse(body).Title);
    console.log("Year: " + JSON.parse(body).Year);
    console.log("Movie Rating (IMDB): " + JSON.parse(body).imdbRating);
    console.log("Movie Rating (Rotten Tomatoes): " + JSON.parse(body).Ratings[1]);
    console.log ("Country: " + JSON.parse(body).Country);
    console.log ("Language: " + JSON.parse(body).Language);
    console.log ("Plot: " + JSON.parse(body).Plot);
    console.log ("Actors: " + JSON.parse(body).Actors);
    }); 
    var twitter = new Twitter();
    var parameters = "screen_name=truthinessfromd&count=20";
    var errorCallback = "error";
    var successCallback = "success";
    twitter.getUserTimeline({ screen_name: 'truthinessfromD', count: '20'}, errorCallback, successCallback);

    var params = {screen_name: 'truthinessfromD'};
  
    client.get('statuses/user_timeline', params, function(error, tweets, response) {
    if (!error) {
      console.log(tweets);
      console.log(response);
    } else {
        console.log(error);
    }
  });