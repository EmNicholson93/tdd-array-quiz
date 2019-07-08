array = ['sky', 'hot', 'Yeti', 'green'];

function dontAskWhy(array, callback) {
  let i = 0;
  for(i; i < array.length; i++) {
    newArray[i] = callback(array[i]);
  }
  return newArray;
}

module.exports = { dontAskWhy };
