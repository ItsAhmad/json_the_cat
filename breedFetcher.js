const request = require('request');

const fetchBreedDescription = (breed) =>  {
  const apiurl = `https://api.thecatapi.com/v1/breeds/search?q=${breed}`;

  request.get(apiurl, (error, response, body) => {
    if (error) {
      console.log("Error with making request");
      return;
    }

    const breeds = JSON.parse(body);

    if (breeds.length === 0) {
      console.log(`Breed "${breed}" not found.`);
      return;
    }

    const firstBreed = breeds[0];
    console.log(`Breed: ${firstBreed.name}`);
    console.log(`Description: ${firstBreed.description}`);
  }

  );
};

module.exports = {fetchBreedDescription};