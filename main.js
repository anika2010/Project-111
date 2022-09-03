prediction_1="";
prediction_2="";
 Webcam.set({
     height:300,
     width:330,
     image_format:'png',
     png_quality:90
     
 });
    camera=document.getElementById('camera');
    Webcam.attach('#camera');
    function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById('result').innerHTML='<img id="captured_image" src="'+data_uri+'">';

    })
    }
    classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/uoY_eyba7/model.json',modelLoaded);
    function modelLoaded(){
        console.log('Model is loaded');
    }
    function speak(){
        var synth=window.speechSynthesis;
        speak_data_1="The first prediction is"+prediction_1;
        speak_data_2="The second prediction is"+prediction_2;
        var utterThis=new SpeechSynthesisUtterance(speak_data_1+speak_data_2);
        synth.speak(utterThis);
    }