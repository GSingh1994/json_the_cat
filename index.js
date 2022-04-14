const { fetchBreedDescription } = require('./breedFetcher');

const breedName = process.argv[2];

fetchBreedDescription(breedName, (error, body) => {
  if (error) {
    console.log(`"${error.hostname}" not found (Request failed successfully!!)`);
  } else {
    const data = JSON.parse(body);
    data.length > 0 ? console.log(data[0].description) : console.log(`${breedName} Breed not found`);
  }
});
