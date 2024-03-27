
https://teachablemachine.withgoogle.com/models/vNvfO-pqQ/

function startClassification()
{
    navigator.mediaDevices.getUserMedia({audio: true });
    classifier= ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/vNvfO-pqQ/model.json',modelReady);

}

function modelReady()
{
    classifier.classify(gotResults);
}