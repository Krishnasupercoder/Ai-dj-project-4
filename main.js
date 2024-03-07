var canvas;
var webcam;
var music;
var model;
var left_wrist_x = 0;
var left_wrist_y = 0;
var right_wrist_x = 0;
var right_wrist_y = 0;
var score_left_wrist = 0;
function preload(){
music = loadSound("music1.mp3");
}
function setup(){
canvas = createCanvas(600,500);
canvas.center();
webcam = createCapture(VIDEO);
webcam.hide();
 model= ml5.poseNet(webcam,alertmodel);
 model.on("pose",modelcheck);
}
function alertmodel(){
    console.log("Model Loaded");
}
function modelcheck(results){
if (results.length>0){
    console.log(results);
    left_wrist_x = results[0].pose.leftWrist.x;
    left_wrist_y = results[0].pose.leftWrist.y;
    console.log("Left Wrist X is equal =" + left_wrist_x + "Left Wrist Y is equal =" + left_wrist_y);
    right_wrist_x = results[0].pose.rightWrist.x;
    right_wrist_y = results[0].pose.rightWrist.y;
    console.log(" Right Wrist X is equal =" + right_wrist_x + "Right Wrist Y is equal =" + right_wrist_y);
    score_left_wrist = results[0].pose.keypoints[9].score;
    console.log("Score of left wrist is =" + score_left_wrist);
}
}
function draw(){
image(webcam,0,0,600,500);
fill("#ff0000");
stroke("#0000ff");
if (score_left_wrist > 0.2){
circle(left_wrist_x,left_wrist_y,20);
left_wrist_y_no = Number(left_wrist_y);
remove_decimal = floor(left_wrist_y_no);
volume = remove_decimal/500;
document.getElementById("volume").innerHTML="Volume =" + volume;
music.setVolume(volume);
}
}
function play(){
    music.play();
    music.setVolume(1);
    music.rate(1);
    
}var canvas;
var webcam;
var music;
var model;
var left_wrist_x = 0;
var left_wrist_y = 0;
var right_wrist_x = 0;
var right_wrist_y = 0;
var score_left_wrist = 0;
function preload(){
music = loadSound("music1.mp3");
}
function setup(){
canvas = createCanvas(600,500);
canvas.center();
webcam = createCapture(VIDEO);
webcam.hide();
 model= ml5.poseNet(webcam,alertmodel);
 model.on("pose",modelcheck);
}
function alertmodel(){
    console.log("Model Loaded");
}
function modelcheck(results){
if (results.length>0){
    console.log(results);
    left_wrist_x = results[0].pose.leftWrist.x;
    left_wrist_y = results[0].pose.leftWrist.y;
    console.log("Left Wrist X is equal =" + left_wrist_x + "Left Wrist Y is equal =" + left_wrist_y);
    right_wrist_x = results[0].pose.rightWrist.x;
    right_wrist_y = results[0].pose.rightWrist.y;
    console.log(" Right Wrist X is equal =" + right_wrist_x + "Right Wrist Y is equal =" + right_wrist_y);
    score_left_wrist = results[0].pose.keypoints[9].score;
    console.log("Score of left wrist is =" + score_left_wrist);
}
}
function draw(){
image(webcam,0,0,600,500);
fill("#ff0000");
stroke("#0000ff");
if (score_left_wrist > 0.2){
circle(left_wrist_x,left_wrist_y,20);
left_wrist_y_no = Number(left_wrist_y);
remove_decimal = floor(left_wrist_y_no);
volume = remove_decimal/500;
document.getElementById("volume").innerHTML="Volume =" + volume;
music.setVolume(volume);
}
}
function play(){
    music.play();
    music.setVolume(1);
    music.rate(1);
    
}