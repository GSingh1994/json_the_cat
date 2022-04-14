const { fetchBreedDescription } = require('./breedFetcher');

const breedName = process.argv[2];

fetchBreedDescription(breedName, (error, desc) => {
  if (error) {
    console.log(`"${error.hostname}" not found (Request failed successfully!!)`);
  } else {
    console.log(error);
    desc ? console.log(desc) : console.log(`${breedName} Breed not found`);
  }
});
