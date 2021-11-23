const request = require('request');

const Breed = process.argv.slice(2);

request(`https://api.thecatapi.com/v1/breeds/search?q=${Breed}`, (error, response, body) => {
  const data = JSON.parse(body);
  if (data[0] !== undefined) {
    console.log(data[0].description);
  } else {
    console.log(`Cannot find any breed info, please try again.`);
  }
  return;
});