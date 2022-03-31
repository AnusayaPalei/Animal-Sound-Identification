function start(){
    navigator.mediaDevices.getUserMedia({audio:true});
    Classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/Vq0tz11sR/model.json", modelloaded);
}
function modelloaded(){
    classifier.Classify(gotResults);
  }
  var dog = 0;
  var cat = 0;
  
  function gotResults(error, results) {
    if (error) {
      console.error(error);
    } else {
      console.log(results);
    }
}