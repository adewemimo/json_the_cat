const breedFetcher = require('../breedFetcher');
const {assert} = require('chai');

describe('#breedFetcher', () => {
    it('should return breed description when the breed is provided', () => {
        const expected = 'The Chartreux is generally silent but communicative. Short play sessions, mixed with naps and meals are their perfect day. Whilst appreciating any attention you give them, they are not demanding, content instead to follow you around devotedly, sleep on your bed and snuggle with you if you’re not feeling well.';
        assert.equal(breedFetcher('Chartreux'), expected);
    })
})
