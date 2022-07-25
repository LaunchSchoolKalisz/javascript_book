let rlSync = require('readline-sync');
let userName = rlSync.question("What's your name?\n");
console.log(`Good morning, ${userName}.`);