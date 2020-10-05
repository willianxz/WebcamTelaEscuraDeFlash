var capture;
var mode = 0;
var stepSize = 12;
var tempoFilter = 0;

function setup() {
 var canvas = createCanvas(windowWidth, windowHeight);
 capture = createCapture(VIDEO);
 capture.size(windowWidth, windowHeight);
 capture.hide();
 noStroke();
 fill(0);
 background(255);
}

function draw() {
  
  filter(ERODE);
  capture.loadPixels();
  
  if(tempoFilter == 25){
    
    background(255);
    tempoFilter = 0;
  }else{
   tempoFilter++; 
  }
  
  showPixels();
  
}

function showPixels(){
  
if(mode == 0){
  
for(var y = 0; y < capture.height; y+=stepSize){
  for(var x = 0; x < capture.width; x+=stepSize){
    var i = y * capture.width + x
    var darkness = (255 - capture.pixels[i*4]) / 255;
    var radius = stepSize * darkness;
    fill(51);
    ellipse(x, y, radius, radius);
  } 
 }
}else if(mode == 1){
 for(var y = 0; y < capture.height; y+=stepSize){
  for(var x = 0; x < capture.width; x+=stepSize){
    var i = y * capture.width + x
    var darkness = (255 - capture.pixels[i*4]) / 255;
    var radius = stepSize * darkness;
    fill(51);
    rect(x, y, radius, radius);
  } 
 }
}
  
}

function mousePressed(){
  saveCanvas('minhaFoto', 'jpg');
 if(mode == 0){
   mode++;
 }else{
  mode = 0; 
 }
 background(255);
}
