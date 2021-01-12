const chalk = require("chalk");
console.log(chalk.red("working on buffer"));

// main code

// Creates a zero-filled Buffer of length 10
const buf0 = Buffer.alloc(10);
console.log(buf0);

// Creates a one-filled Buffer of length 10
const buf1 = Buffer.alloc(10, 1);
console.log(buf1);

// Creates a uninitialized Buffer of length 10. faster than alloc() but returned Buffur might contain old data
const bufUnsafe = Buffer.allocUnsafe(10);
console.log(bufUnsafe );
