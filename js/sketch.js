
 function setup() {
 	createCanvas(600, 400);
	strokeWeight(5)
}

function touchMoved() {
  stroke(random(255),random(255),random(255));
	line(mouseX, mouseY, pmouseX, pmouseY);
	return false;
	
}

