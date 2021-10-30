noseX=0;
noseY=0;
difference = 0;
rightWrist = 0;
leftWrist = 0;


function setup(){
    video= createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550, 550);
    canvas.position(560, 150);

    poseNet= ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw(){
    
    document.getElementById("square_sides").innerHTML = "Width And Height of Square will be = " + difference +"px";
    background('gray');
    fill('#00FFFF');
    stroke('#00FFFF');
    square(noseX, noseY, difference);
}

 function modelLoaded(){
     console.log('Model is Loaded');
 }

 function gotPoses(result){
     if(result.length > 0){
         console.log(result);
         noseX = result[0].pose.nose.x;
         noseY = result[0].pose.nose.y;
         console.log("noseX = " + noseX +" noseY = " + noseY);

         leftWristX = result[0].pose.leftWrist.x;
         rightWristX = result[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);


        console.log("leftWristX =" + leftWristX +"rightWristX ="+ rightWristX + " difference = " + difference);
     }

 }