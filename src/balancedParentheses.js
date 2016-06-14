'use strict';

/*
 * balancedParentheses
 *
 * Takes an input string and returns true or false depending on if the string
 * has balanced parentheses.
 *
 * Eg:
 *
 *   input: '(x + y)'
 *   returns: true
 *
 *   input: '(x + y'
 *   returns: false
 *
 *   input: 'foo bar baz'
 *   returns: false
 *
 *   input: ''
 *   returns: false
 */
module.exports = ( input ) => {
  let checker = 0;
  for (let i=0; i<input.length; i++) {
    if (input[i] === "(") checker++;
    if (input[i] === ")") checker--;
    if (checker === 0) return true;
  }
  return false;
};
