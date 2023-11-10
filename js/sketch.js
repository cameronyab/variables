var ellipseX =400;
var ellipseY =400;

function setup() {
    var canvas = createCanvas(800, 800);
    canvas.parent("p5container");
}
function draw() {

background("blue");


    fill(255, 255, 255);
    fill("red");
    ellipse(mouseX, mouseY, 200);

    
}



