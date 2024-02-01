status="";
objects=[];
song="";
function preload(){
song=loadSound("alert.mp3");
}
function setup(){
canvas=createCanvas(380,380);
canvas.center();
video=createCapture(VIDEO);
video.size(380,380)
video.hide();
objectDetector=ml5.objectDetector('cocossd',ModelLoaded);
document.getElementById("status").innerHTML="Status:Object Detecting";
}


function ModelLoaded(){
console.log("Model Is Loaded");
status=true;

}

function gotResult(error,results){
if (error) {
console.log(error); 
}
else{
    console.log(results);
    objects=results;
}
}

function draw(){
image(video,0,0,380,380);
if (status != "") {
 r=random(255);
 g=random(255);
 b=random(255);
 objectDetector.detect(video,gotResult)
    for (let i = 0; i < objects.length; i++) {
    document.getElementById("status").innerHTML="Status:Object Detected";
    document.getElementById("number_of_objects").innerHTML="Number Of Objects Detected Are: "+objects.length;
   fill("red");
stroke("red")
noFill();
percent=floor(objects[i].confidence*100);
rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);
text(objects[i].label+" "+percent+"%",objects[i].x+20,objects[i].y+20);
if (objects[i].label == "person") {
document.getElementById("number_of_objects").innerHTML="Baby Detected";
console.log("stop");
song.stop();
}
  else{
    document.getElementById("number_of_objects").innerHTML="Baby Not Detected";
    console.log("play");
    song.play();
  }  }
if (objects.length == 0){
    document.getElementById("number_of_objects").innerHTML="Baby Not Detected";
    console.log("play");
    song.play();
}{
    
}
}





}