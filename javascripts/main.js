$(document).ready(function(){

var Planets = ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"];

// Question #7
var phrase = "This content generated with vanilla JavaScript";
var element = document.getElementById("vanilla_output");
element.innerHTML = phrase;

// Question #8

var jqueryPhrase = "This content generated with jQuery";
	$("#jquery_output").text(jqueryPhrase);


// Functions and Operators
	function modulus(num1, num2){
		return num1 % num2;
	}

	function add(x, y) {
	    return x + y;
	}

	function subtract(x, y){
		return x - y;
	}

	function doMath(fn, x, y) {
	  return function () {
	    return fn(x, y);
	  }
	}

	adds = doMath(add,10,5);
	subtracts = doMath(subtract,10,5);
	console.log(adds());
	console.log(subtracts());



// Arrays

	function sortedPlanets(){
		return Planets.sort();	
	}
			console.log(sortedPlanets());


	function reversedPlanets(element, index, array){
		return Planets.reverse();
	}
		console.log(reversedPlanets());


	function longPlanets (element, index, array){
		if (element.length >= 7) {
    	return element;
		}
	}
	var filteredPlanets = Planets.filter(longPlanets);
	console.log(filteredPlanets);


	// XHR
	function getAnimals(){
		$.ajax({
			url: "data/animals.json",
		}).done(function(data) {
				console.log("data from animals", data.animals);
			})
	};

	getAnimals();

});