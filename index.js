const { fetchBreedDescription } = require('./breedFetcher');
const BREED = process.argv.slice(2);

fetchBreedDescription(BREED, (error, desc) => {
  if (error) {
    console.log('Error fetch details:', error);
  } else {
    console.log(desc);
  }
});