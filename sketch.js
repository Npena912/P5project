//sets the value for when you move your mouse
let valueX;
let valueY;
  
function setup() {
    
    
    createCanvas(500, 500);
}
   
function draw() {
    //sets the background to gray
    background('gray'); 
    textSize(15);
    //creates the robot face
   
    rect(50, 50, 300, 300);
    fill('black')
    ellipse(125, 150, 50, 50);
    ellipse(275, 150, 50, 50);
    rect(150,225,100,50)
    //text at the top
    fill('black')
    text('Hello, to change color move and click at the same time', 30, 30);
    fill(valueX, 255-valueY, 255-valueX);
    
}
  
function mousePressed() {
    valueX = mouseX%255;
    valueY = mouseY%255;
}