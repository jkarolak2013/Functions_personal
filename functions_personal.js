//How much stain to paint a deck based onthe square footage of a deck.


function calulationArea(){
	var width = 25;//in feet
	var depth = 45;//in feet
	var onegallonofStain = 250;//square feet of coverage per gallon
	var area = width * depth / onegallonofStain;//calulation of how much stain is needed in gallons
		console.log("You will need "+area+" gallons of stain to complete your project!");
}	
calulationArea();






