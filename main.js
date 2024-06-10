difference = 0;
rightWristX = 0;
leftWristX = 0;
 function setup(){
        video = createCapture(VIDEO);
        video.size(550, 500);
    
    canvas = createCanvas(550, 400);
    canvas.position(600, 120);
    
    poseNet = ml5.poseNet(video, modelloaded);
    poseNet.on('pose', gotposes);
    }

    function modelloaded(){
        console.log('PoseNet is initialized')
    }

    function gotposes(results){
        if(results.length > 0){
            console.log(results);
            leftWristX = results[0].pose.leftWrist.x;
            rightWristX = results[0].pose.rightWrist.x;
            difference = floor(leftWristX - rightWristX);
            console.log("leftWristX = " + leftWristX + "rightWristX" + rightWristX + "difference = " + difference);
        }
    }

    function draw(){
        background('#969A97');
    
        document.getElementById("font_size").innerHTML = "Width And Height of a Square will be = " + difference + "px";
        fill('#f90093');
        stroke('#F90093');
        textSize(difference);
        text('Griffin', 50, 400);
    }