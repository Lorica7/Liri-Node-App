require("dotenv").config();
var fs = require("fs");
var keys = require("./key.js");
var request = require('request');
//var Twitter = require('twitter');
var oauth2lib = require('oauth20-provider');
var oauth2 = new oauth2lib({log: {level: 2}});
var Twitter = require('twitter-node-client').Twitter;

//Callback functions
var error = function (err, response, body) {
    console.log('ERROR [%s]', err);
};
var success = function (data) {
    console.log('Data [%s]', data);
};
   
 

if (process.argv[2] == "movie" && process.argv[3] !== undefined) {

    var movieReq = process.argv[3];
    var queryUrl = "http://www.omdbapi.com/?t=" + movieReq + "&y=&plot=short&apikey=trilogy";

    console.log(queryUrl);

    request(queryUrl, function (error, response, body) {
        console.log("Title: " + JSON.parse(body).Title);
        console.log("Year: " + JSON.parse(body).Year);
        console.log("Movie Rating (IMDB): " + JSON.parse(body).imdbRating);
        console.log("Movie Rating (Rotten Tomatoes): " + JSON.parse(body).Ratings[1]);
        console.log("Country: " + JSON.parse(body).Country);
        console.log("Language: " + JSON.parse(body).Language);
        console.log("Plot: " + JSON.parse(body).Plot);
        console.log("Actors: " + JSON.parse(body).Actors);
    });
} else if (process.argv[2] == "movie" && process.argv[3] == undefined) {
    request("http://www.omdbapi.com/?t=mr+nobody&y=&plot=short&apikey=trilogy", function (error, response, body) {
        request(queryUrl, function (error, response, body) {
            console.log("Title: " + JSON.parse(body).Title);
            console.log("Year: " + JSON.parse(body).Year);
            console.log("Movie Rating (IMDB): " + JSON.parse(body).imdbRating);
            console.log("Movie Rating (Rotten Tomatoes): " + JSON.parse(body).Ratings[1]);
            console.log("Country: " + JSON.parse(body).Country);
            console.log("Language: " + JSON.parse(body).Language);
            console.log("Plot: " + JSON.parse(body).Plot);
            console.log("Actors: " + JSON.parse(body).Actors);
        });
    });
} else if (process.argv[2] == "my-tweets") {
    var twitter = new Twitter();
    var parameters = "screen_name=truthinessfromD&count=5";
    var errorCallback = error;
    var successCallback = success;
    twitter.getTweetsOfMe({ q: 'truthinessfromD', count: '5'}, errorCallback, successCallback);
    
        
}
    


