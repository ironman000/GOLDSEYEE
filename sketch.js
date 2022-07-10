function setup() {
    createCanvas(windowWidth, windowHeight, WEBGL);

    x = 10;
    y = 10;
    speed = 1;
  }
  
  function draw() {
    background(0);
    orbitControl();
    colorMode(RGB);
// rotating cubes
    noFill();
    stroke(100);
    box(360);
    stroke(130);
    rotateY(millis() / 20000);
    box(360);
    stroke(150);
    rotateY(millis() / 19900);
    box(360);
    stroke(80);
    rotateY(millis() / 19800);
    box(360);
    stroke(100);
    rotateY(millis() / 19700);
    box(360);
    stroke(170);
    rotateY(millis() / 19600);
    box(360);
    stroke(199);
    rotateY(millis() / 19500);
    box(360);
// center design
 let dirX = (mouseX / width - 0.5) * 2;
  let dirY = (mouseY / height - 0.5) * 2;
  directionalLight(250, 250, 250, -dirX, -dirY, -1);
  noStroke();
    fill(0);
    sphere(120);
    
x = x + speed;
if (x >= 220 || x < 30){
    speed = speed*-1
}

y = y + speed;  


  }
