const crypto = require('crypto');

function randomInt(start, end) {
  //crypto=> yeh start and end k andar se koi bhi random value dega in output
  //so this the another way of finding random number using crypto and import export in Node.js
  return crypto.randomInt(start,end);
}
module.exports = randomInt;
