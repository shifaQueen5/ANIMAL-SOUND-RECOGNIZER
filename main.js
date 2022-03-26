function startClassification(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.soundClassifier('', modelReady);
}
function modelReady(){
    classifier.classify(gotResults);
}
function gotResults(error,results){
    if (error) {
       console.log(error);
    }
    else{
        console.log(results);
        document.getElementById("result_label").innerHTML= 'I can hear - '+ results[0].label;
    }
}