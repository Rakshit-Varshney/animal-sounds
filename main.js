function startClassification(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/lrDuJniNg/model.json',modelReady);
}
function modelReady(){
    classifier.classify(gotResult);
}
function gotResult(error,results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        document.getElementById("result_label").innerHTML='I can hear-'+results[0].label;
        document.getElementById("result_confidence").innerHTML="accuracy-"+(results[0].confidence*100).toFixed(2)+'%';
        img=document.getElementById('alien1');
        
        if(results[0].label=="bark"){
            img.src='dog.png';
            
        }
        else if(results[0].label=="meow"){
            img.src='cat.png';
           
        }
        else if(results[0].label=="moo"){
            img.src='cow.png';
           
        }
        else if(results[0].label=="roar"){
            img.src='lion.png';
           
        }
        else {
            img.src='ear.jpeg';
            
        }
    }
}