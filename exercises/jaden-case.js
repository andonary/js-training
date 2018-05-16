"use strict";

/*
 * Jaden Smith Case
 *
 * Make a `jadenCase` function that takes a string as parameter
 * and return the string with each words capitilized.
 *
 * Example : "How are you ?" -> "How Are You ?"
 *
 */

const jadenCase = string => {
  const obj = string.split(" ");
  const arr = [];
  for (let mot of obj) {
    mot =
      mot.substring(0, 1).toUpperCase() +
      mot.substring(1, Infinity).toLowerCase();
    arr.push(mot);
  }
  return arr.join(" ");
};

//* Begin of tests
const assert = require("assert");
assert.strictEqual(typeof jadenCase, "function");
assert.strictEqual(jadenCase("How are you ?"), "How Are You ?");
assert.strictEqual(jadenCase("HI JOHN !"), "Hi John !");
// End of tests */
