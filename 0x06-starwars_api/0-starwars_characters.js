#!/usr/bin/node

const request = require('request');

function getMovieCharacters(movieId) {
  // Make a request to get information about the movie
  request(`https://swapi-api.hbtn.io/api/films/${movieId}`, function (err, res, body) {
    if (err) {
      console.error('Error:', err);
      return;
    }

    // Parse the response to extract the list of characters
    const movieData = JSON.parse(body);
    const characters = movieData.characters;

    // Print the characters in order
    printCharacters(characters, 0);
  });
}

function printCharacters(characters, index) {
  if (index === characters.length) {
    // All characters have been printed
    return;
  }

  // Make a request to get information about the character
  request(characters[index], function (err, res, body) {
    if (err) {
      console.error('Error:', err);
    } else {
      // Parse the response to extract the character's name
      const characterData = JSON.parse(body);
      console.log(characterData.name);
    }

    // Continue to the next character
    printCharacters(characters, index + 1);
  });
}

// Check if the movie ID is provided as a command-line argument
const movieId = process.argv[2];
if (!movieId) {
  console.error('Please provide a Movie ID as a command-line argument.');
} else {
  getMovieCharacters(movieId);
}
