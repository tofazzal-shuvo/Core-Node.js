const chalk = require("chalk");
console.log(chalk.red("working on assert module"));
// main code
const assert = require("assert");

function add(param, param1) {
  return param + param1;
}

var expected = add(1, 3);
var actual = 5;
var msg = "not expected";

// try {
//   const err = assert.throws(function () {
//     throw new Error("Wrong value");
//   }, Error);
//   console.log({err})
// } catch (error) {
//   console.log(error);
// }

//comment# params:(expected, message)
// assert(actual < expected, msg);
// assert.ok(actual < expected , msg);

//comment# params:(actual, expected, message)
// assert.strictEqual(actual, expected, msg);
// assert.notStrictEqual(actual, expected, msg);

var actual = [1, 2, 3, 4, 5];
var expected = [1, 2, 3, 4, 5];
//comment# params:(actual, expected, message)
// assert.deepStrictEqual(actual, expected, msg);
// assert.notDeepStrictEqual(actual, expected, msg);

// comment# create custom error by AssertionError class
// const { message } = new assert.AssertionError({
//   message: "custom error by Assertion class",
//   actual: 4,
//   expected: 5,
//   operator: "*",
// });
// console.log(chalk.red(message));

// comment# verifing error output
try {
  assert.strictEqual(1, 2);
} catch (error) {
  console.log("isInstance: ", error instanceof assert.AssertionError);
  //will return another error, if error isn't instance of AssertionError
  assert(error instanceof assert.AssertionError);
}
