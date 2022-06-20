function setup() {
  video = createCapture(VIDEO);
  video.size(550, 550);

  canvas = createCanvas(550, 550);
  canvas.position(560,150);

  poseNet = ml5.poseNet(video, madelLoaded);
  poseNet.on('pose', gotposes);
}

function madelLoaded() {
    console.log('PoseNet Is Initalized!')
}

function draw() {
    background('#969A97');
}

function gotposes(results)
{
   if(results. length > 0)
   {
     console.log(results);
   }
}