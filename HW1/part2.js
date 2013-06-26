#!/usr/bin/env node
var fs = require('fs'),
    primes = [ 2 ],
    i, number = 3,
    isPrime,
    outfile = "part2.txt",
    out = "";

while (primes.length <= 100) {
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
  // 2 is the only even prime nmber
  number += 2;
}

out = primes.join(',');

fs.writeFileSync(outfile, out);
console.log("Script: " + __filename + "\nWrote: " + out + "\nTo: " + outfile);
