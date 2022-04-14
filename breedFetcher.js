const request = require('request');

const breedRequested = process.argv.slice(2);

request(`https://api.thecatapi.com/v1/breeds/search/?q=${breedRequested}`, (error, response, body) => {
  if (error) {
    console.log(`"${error.hostname}" not found (Request failed successfully!!)`);
  }
  const data = JSON.parse(body);
  data.length > 0 ? console.log(data[0].description) : console.log(`${breedRequested} Breed not found`);
});
