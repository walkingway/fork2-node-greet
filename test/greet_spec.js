//var expect = require("chai").expect

var greet = require("greet")

describe('greet', function(){
	it("should greet a person by name", function(){
		expect(greet("cheng")).to.eql("hello, cheng");
	});
});

describe('greet', function(){
	it("should greet a person flirtatiously if drunk", function(){
		expect(greet("way","drunk")).to.eql("hello way, you look sexy today");
	});
});





