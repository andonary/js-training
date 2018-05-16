"use strict";

/*
 * Create a `whisper` function that takes a string
 * and return the same string in lower case
 * and wrapped by `*`
 *
 */
const whisper = string => "*" + string.toLowerCase() + "*";

//* Begin of tests
const assert = require("assert");
assert.strictEqual(typeof whisper, "function");
assert.strictEqual(whisper.length, 1);
assert.strictEqual(whisper("cadeau"), "*cadeau*");
assert.strictEqual(whisper("BoNjOuR"), "*bonjour*");
// End of tests */
