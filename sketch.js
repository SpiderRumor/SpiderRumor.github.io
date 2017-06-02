var squidStart = [];
var maxDistance;
var squidDistance;

function preload(){
  squImg = loadImage("squid.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  maxDistance = dist(width/2, height/2, width, height);
  for (var x = 0; x<width; x++){
    squidStart[x] =[];
    for (var y = 0; y<height; y++){
      var distance = dist(width/2, height/2, x, y);
      squidStart[x][y] = distance/maxDistance *255;
    }
  }
  squidDistance = 100;
}

function draw() {
  background(0, 125, 125);
  for (var x = 0; x < width; x += squidDistance){
    for (var y = 0; y < height; y += squidDistance){
      image(squImg, x, y+((sin(millis()*.001+x+y)*20)));
    }
  }
  time = millis();

}
