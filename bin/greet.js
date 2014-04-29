#!/usr/bin/env node
greet = require("../index.js");
var name = process.argv[2];
console.log("hello, " + name);