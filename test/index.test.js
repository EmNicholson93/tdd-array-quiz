const dontAskWhy = require('..lib/index');

describe('return strings for words in an array without a specific letter', () => {
  it('returns string', () => {
    const wordArray = ['sky', 'hot', 'Yeti', 'green'];
    dontAskWhy(wordArray);
    const word = 'hot';

    expect(expect).toequal(`is it ${word}`);
  });
});

