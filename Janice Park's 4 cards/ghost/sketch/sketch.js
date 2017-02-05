var img;
var ghost;
var anime;
var ghosts;

function preload() {
	img = loadImage("casper.png");
ghost = loadImage("ghost 2.png");
    anime = loadImage("anime ghost.png");
}

function setup() {
	
	var theCanvas = createCanvas(windowWidth, windowHeight);
//	noStroke ();
//	blendMode (LIGHTEST)
	background (0);
}

function draw() {

    var ghosts = [img, anime, ghost]
	for (var y=0; y<3;y++) {
	tint(random(255), random(255), random(255),6);
	image(ghosts [y], 0 %windowWidth, 0 % windowHeight, inputX() + 20, inputY()+20);
	
	
	}
	
}
