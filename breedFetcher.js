const request = require('request');
const breed = process.argv[2];

const breedFetcher = breedName => {

    request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, body, response) => {
      if (error) {
        console.log(error);
        return error;
      } else {  
        const data = JSON.parse(body.body);
        if (data.length === 0) {
          console.log('Breed not found');
        } else {
          console.log('response:', response);
          console.log('------------')
          console.log("data: " , data[0].description);
          return data[0].description;
        }
            
      }
    });
}

breedFetcher(breed);

module.exports = breedFetcher;
