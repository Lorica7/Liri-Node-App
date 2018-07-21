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
            for (var i = 0; i < 6; i++) {
                console.log(tweets[i].text);
            }
        } else {
            console.log(error);
        }
    });
} else if (process.argv[2] == "spotify-this-song") {
    var spotifySong = new Spotify(keys.spotify);
    var search = process.argv.slice(3).join(" ");
    spotifySong.search({ type: 'track', query: search }, function (err, data) {
        if (err) {
            return console.log('Error occurred: ' + err);
        } else {
            for (var i = 0; i < 19; i++) {
               console.log(data.tracks.items[i].album.artists);
               console.log("Album name: " + data.tracks.items[i].album.name);
                console.log("Song name: " + data.tracks.items[i].name);
                console.log("Preview url: " + data.tracks.items[i].preview_url);
            }

        }

    });
} else if (process.argv[2] == "spotify-this-song")