console.log("ml5 version",ml5.version);

Webcam.set({
    width: 320,
    height: 400,
    image_format: 'png',
png_quality: 70
});
camera= document.getElementById("camera");
Webcam.attach(camera);

classifier= ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/HzZn2jcOm/model.json",modelLoaded);

function modelLoaded(){
    console.log("model loaded");
}

function take_snapshot(){
    Webcam.snap(function(data_uri){document.getElementById("result").innerHTML = '<img id="selfie_image" download="captured_image.png" src="'+data_uri+'"/>';})
}
