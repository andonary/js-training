"use strict";

/*
 * Create a `keepFirst` function that takes a string as parameter
 * and return the string only keeping the 2 first characters
 *
 * Create a `keepLast` function that takes a string as parameter
 * and return the string only keeping the 2 last characters
 *
 * Create a `keepFirstLast` function that takes a string as parameter
 * and only keep 2 characters from the third character
 *
 */

const keepFirst = string => string.substring(0, 2);
const keepLast = string => string.substring(string.length - 2, Infinity);
const keepFirstLast = string => string.substring(2, string.length - 2);

//* Begin of tests
const assert = require("assert");
assert.strictEqual(keepFirst("Lundi"), "Lu");
assert.strictEqual(keepLast("Lundi"), "di");
assert.strictEqual(keepFirstLast("Lunndi"), "nn");
// End of tests */
