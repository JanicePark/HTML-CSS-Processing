function setup() {

    var theCanvas = createCanvas(windowWidth, windowHeight);
	blendMode (LIGHTEST);
}


function draw() {

    background (0, 100,205,4);
    ellipse (inputX(),inputY(), 25,25)

//    text (frameCount, 290, 30, 100);
     if (mouseIsPressed || touchIsDown) {
            fill (random(255),random(255), random(255));
    textSize (10);
    text("Woman stopped from boarding plane in India", inputX()+50, inputY())
	ellipse (inputX(),inputY(), 50,50);  
    }
        }

function mouseMoved () {

if (mouseY > 400 || touchY > 400) {
fill (random(255),random(255), random(255));
	textSize (15);
text ("because her dress was 'too short'", mouseX+50,mouseY);
}
}


var isTouch = (('ontouchstart' in window) || (navigator.msMaxTouchPoints > 0));


function inputX() {
    var output = 0;

    if (isTouch) {
        output = touchX;
    } else {
        output = mouseX;
    }

    return output;
}

function inputY() {
    var output = 0;

    if (isTouch) {
        output = touchY;
    } else {
        output = mouseY;
    }

    return output;
}


function inputPreviousX() {
    var output = 0;

    if (isTouch) {
        output = ptouchX;
    } else {
        output = pmouseX;
    }

    return output;
}


function inputPreviousY() {
    var output = 0;

    if (isTouch) {
        output = ptouchY;
    } else {
        output = pmouseY;
    }

    return output;
}

