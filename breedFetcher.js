const request = require('request');
const breed = process.argv[2];

const breedFetcher = (breedName, getDescriptionCallback) => {

  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, body) => {
    if (error) {
      console.log(error);
      return error;
    } else {
      const data = JSON.parse(body.body);
      if (data.length === 0) {
        console.log('Breed not found');
      } else {
        getDescriptionCallback(data[0].description);
      }
            
    }
  });
};

const breedDescription = (description) => {
  console.log('Breed Description: ', description);
  return description;
};

//When calling the test file for this function, The line will give 'breed not found' output because breed is not supplied from the command line. it will however work when this file itself is called e.g. node breedFetcher.js Chartreux
breedFetcher(breed, breedDescription);

module.exports = {
  breedFetcher,
  breedDescription
};
