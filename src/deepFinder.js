'use strict';

/*
 * deepFinder
 *
 * Takes an input and a test function and returns any values
 * in the input *recursively* that pass the test.
 *
 * Eg:
 *
 *   input: [ 'ant', 'baby', [ 'apple', 'banana', 'carrot' ], { foo: 'aardvark' }, 'allegory' ]
 *   test: value => /^a/i.test( value )
 *   returns: [ 'ant', 'apple', 'aardvark', 'allegory' ]
 *
 */
module.exports = ( input, test ) => {
  let result = [];

  var recurse = function(input, test) {
    if (typeof input === "string") {
      if (test(input)) result.push(input);
    } else if (Array.isArray(input)) {
      for (let i=0; i<input.length; i++) {
        recurse(input[i], test)
      }
    } else {
      for (let key in input) {
        if (test(input[key])) result.push(input[key])
      }
    }
  }

  recurse(input, test)

  return result;
};
