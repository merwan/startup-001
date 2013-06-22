#!/usr/bin/env node
var fs = require('fs'),
    primes = [ 2 ],
    i, number,
    isPrime,
    outfile = "part2.txt",
    out = "";

for (number = 3; number <= 100; number++) {
  isPrime = true;
  for (i in primes) {
    if (number % primes[i] == 0) {
      isPrime = false;
      break;
    }
  }
  if (isPrime) {
    primes.push(number);
  }
}

for (i in primes) {
  out += primes[i] + ',';
}
out = out.substring(0, out.length - 1);

fs.writeFileSync(outfile, out);
console.log("Script: " + __filename + "\nWrote: " + out + "\nTo: " + outfile);
