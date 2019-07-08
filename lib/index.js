array = ['sky', 'hot', 'Yeti', 'green'];

function dontAskWhy(array, callback) {
  let i = 0;
  for(i; i < array.length; i++) {
    array.includes('y');
    return false;
  }
  return array;
}

module.exports = { dontAskWhy };
