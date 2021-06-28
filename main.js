noseX = 0;
noseY = 0;

difference = 0;
rightWristX = 0;
leftWristX = 0;

function setup()
{
    video = createCapture(VIDEO);
    video.size(550, 500);

    canavas = createCanvas(550, 500);
    canavas.position(560, 150); 

    poseNet = ml5.poseNet(video, modelloaded);
    poseNet.on('pose', gotPoses);
}

function modelloaded()
{
    console.log('Initialized!');
}

function draw()
{
    document.getElementById("font_size").innerHTML = "Width And Height Of The Font Will Be = " + difference + "px";

    background('#969A97');
    fill('#FFA500');
    stroke('#FFA500');
    textSize(difference);
}

function textSize()
{
    text('Tanishka', 40, 200);
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("noseX = " + noseX + "noseY = " + noseY);

        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        
        difference = leftWristX - rightWristX;
        console.log("leftWristX = " + leftWristX + "rightWristX = " + rightWristX + "difference = " + difference);
    }
}