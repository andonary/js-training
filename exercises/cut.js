"use strict";

/*
 * Create the `cutFirst` function that takes a string and remove the 2 first characters
 * Create the `cutLast` function that takes a string and remove the 2 last characters
 * Create the `cutFirstLast` function that takes a string as parameter
 * and remove the 2 first characters and 2 last characters
 *
 * @notions String methods
 * https://github.com/nan-academy/refs/blob/master/js-training/methods.md#string---transform
 */

const cutFirst = string => string.substring(2, Infinity);
const cutLast = string => string.substring(0, string.length - 2);
const cutFirstLast = string => string.substring(2, string.length - 2);
//* Begin of tests
const assert = require("assert");
assert.strictEqual(typeof cutFirst, "function");
assert.strictEqual(typeof cutLast, "function");
assert.strictEqual(typeof cutFirstLast, "function");
assert.strictEqual(cutFirst("toto"), "to");
assert.strictEqual(cutLast("anti"), "an");
assert.strictEqual(cutFirstLast("Dimanche"), "manc");
// End of tests */
