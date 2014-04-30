greet = require("../lib/index.js")
argv = require("minimist")(process.argv.slice(2))
name = argv._[0]
drunk = argv["drunk"]
module.exports = ->
  console.log greet(name, drunk)
  return