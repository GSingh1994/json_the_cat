const request = require('request');

const fetchBreedDescription = (breedName, callback) => {
  request(`https://api.thecatapi.com/v1/breeds/search/?q=${breedName}`, (error, response, body) => {
    if (error) {
      callback(error);
    } else {
      const data = JSON.parse(body);
      data.length > 0 ? callback(error, data[0].description) : callback(false);
    }
  });
};

module.exports = { fetchBreedDescription };
