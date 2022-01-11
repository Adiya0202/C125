noseX= 0;
noseY= 0;
leftwristX= 0;
rightwristX=0;
difference=0;

function preload(){

}
function setup(){
video= createCapture(VIDEO);
video.size(550,500);
canvas=createCanvas(550,420);
canvas.position(600,180);
posenet=ml5.poseNet(video,modelLoaded);
posenet.on("pose", gotResult);
}
function modelLoaded(){
    console.log("posenet is initialised");
}
function gotResult(results){
    if (results.length>0){
        console.log(results);
        noseX= results[0].pose.nose.x;
        noseY= results[0].pose.nose.y;
        console.log("noseX="+noseX+"noseY="+noseY);
        leftwristX= results[0].pose.leftWrist.x;
        rightwristX= results[0].pose.rightWrist.x;
        difference= leftwristX - rightwristX;
        console.log("leftwristX="+ leftwristX +"rightwrist="+ rightwristX);
    }
}

function draw(){
background("#787777");
fill("#eb3492");
stroke("#96cbff");
square(noseX,noseY,difference);
fill("#a81cff");
textSize(difference);
text("ADIYA",50,250);
}