const {breedFetcher, breedDescription} = require('../breedFetcher');
//const {expect} = require('chai');

describe('#breedFetcher', () => {
  it('should return breed description when the breed is provided', async() => {
    const breed = 'Chartreux';
    breedFetcher(breed, breedDescription);
  });
});
