var points = [];
var hideBackface = false;

function setup() {
	createCanvas(640, 480);
}

function draw() {
	clear();
	background(51);
	if (points.length > 2) {
		for (i = 0; i < points.length - 2; i++) {
			a = points[i];
			b = points[i+1];
			c = points[i+2]

			// orientation algorithm taken from
			// https://www.geeksforgeeks.org/orientation-3-ordered-points/
			val = (b[1] - a[1]) * (c[0] - b[0]) -
				  (b[0] - a[0]) * (c[1] - b[1]);

			// clockwise
			if (val > 1) {
				backColor = color(143, 179, 57, 30);
			} else { //counterclockwise
				backColor = color(169, 29, 25, 30);
			}

			fill(backColor);

			if (!hideBackface || val < 1) {
				triangle(a[0], a[1], b[0], b[1], c[0], c[1]);
			}
		}
	}

}

function mouseClicked() {
	points.push([mouseX, mouseY]);
	hideBackface = false;
}

function keyPressed() {
	if (keyCode === 32) {
		hideBackface = !hideBackface;	
	}

	if (keyCode === 13) {
		console.log('clear!');
		points = [];
	}
}