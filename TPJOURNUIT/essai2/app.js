function imagefun() {
    var Image_Id = document.getElementById('lune');
    
    if (Image_Id.src.match("lune.jpg")) {
        Image_Id.src = "soleil.jpg";
        document.getElementById("output").innerHTML=("IL fait Grand Beau !!")
        document.body.style.background = 'yellow'; 
        document.getElementById("output").style.color='black';
        document.getElementById("titre").style.color='black';
        document.getElementById("button").value=("Passe au nuit")
        
        
       ty
    }
    else {
        Image_Id.src = "lune.jpg";
        document.getElementById("output").innerHTML=("La lune est tres belle ce soir! !!")
        document.body.style.background = 'black'; 
        document.getElementById("output").style.color='yellow';
        document.getElementById("titre").style.color='yellow';
        document.getElementById("button").value=("Passe au jour")
    }
}        


