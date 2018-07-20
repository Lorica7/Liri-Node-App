require("dotenv").config();
var fs = require("fs");
var keys = require("./key.js");
var request = require('request');
var Twitter = require('twitter');
var Spotify = require('node-spotify-api');
var client = new Twitter(keys.twitter);



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
    var params = { screen_name: 'truthinessfromD' };
    client.get('statuses/user_timeline', params, function (error, tweets, response) {
        if (!error) {
            console.log(tweets);
           // console.log(JSON.parse(response.text));
        } else {
            console.log(error);
        }
    });
}