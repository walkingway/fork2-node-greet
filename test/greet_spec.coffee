greet = require("greet")
describe "greet", ->
  it "should greet a person by name", ->
    expect(greet("cheng")).to.eql "hello, cheng"
    return
  return

describe "greet", ->
  it "should greet a person flirtatiously if drunk", ->
    expect(greet("way", "drunk")).to.eql "hello way, you look sexy today"
    return
  return