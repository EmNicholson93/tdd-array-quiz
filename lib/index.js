let array = ['sky', 'hot', 'Yeti', 'green'];

function dontAskWhy() {
  let i = 0;
  for(i; i < array.length; i++) {
    !array.includes('y');
  }
  return array;
}

module.exports = { dontAskWhy };
