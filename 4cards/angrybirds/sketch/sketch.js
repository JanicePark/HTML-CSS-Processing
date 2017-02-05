var x= 0
var y =0;
var img;
var bg;

function preload() {
	img = loadImage("angrybird.png");
	bg = loadImage("background.png");
}

function setup() {

	var theCanvas = createCanvas(windowWidth, windowHeight);
	image(bg, 0, 0)
	background (255,2);
	


}

function draw() {
	tint(random(255));
	if (mouseIsPressed || touchIsDown) {
		image(img, x%windowWidth, y%windowHeight, 100,100);
		x=x+20;
		y=y+random (0,100);
		}
	}
