var lodash = require('lodash');

const original = { a: 1, b: 2 }

const originalCopy = Object.assign(original, { c:3})

const copy2 = lodash.cloneDeep(original, {c:3});

original.a = 4;

//original = { a :4, b:2}

console.log(originalCopy);

console.log(copy2);

 
//[].map [].filter [].reduce

//1,2,3,4,5,6
//7,8,9,10,11,12
