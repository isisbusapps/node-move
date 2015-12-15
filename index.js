#! /usr/bin/env node

var program = require('commander');
var fs = require('fs');

program
  .version('1.0.0')
  .parse(process.argv);

if (process.argv.length < 4) {
  console.error('Please provide an input and output file');
  process.exit(1);
}

var input = process.argv[2];
var output = process.argv[3];

fs.rename(input, output, function(err) {
  if (err) {
    console.error(err);
  }
});
