#!/usr/bin/env node
greet = require("../index.js");
var argv = require('minimist')(process.argv.slice(2));
var name = argv._[0];
var drunk = argv["drunk"];
console.log(greet(name,drunk));