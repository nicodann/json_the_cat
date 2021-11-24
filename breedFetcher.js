const request = require('request');

const fetchBreedDescription = (breedName, callback) => {

  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {

    const data = JSON.parse(body);

    if (error !== null) {
      callback(error, null);
    } else if (data.length === undefined) {
      callback('Unable to fetch data', null);
    } else if (data.length === 0) {
      callback('Breed not found', null);
    } else {
      callback(null, data[0].description);
    }

  });
  
};

module.exports = { fetchBreedDescription };