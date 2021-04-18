
// prompt("salut");

// JS TYPE DYNAMIQUEMENT !!


let nombre1=1;
console.log(nombre1) 
console.log( typeof nombre1) 

let maChaine = "les allemands arrivent";
console.log(maChaine);
console.log(typeof maChaine);

let state = true;
console.log(state);
console.log(typeof state);

// sortie systeme de js :console
//console.log("yo from the console");
//console.log(this);

//on ecoute le chargement de la page(dom) ectriture du dom terminé.
// way 1
// onload = init;//attribut evenementiel
// Way 2
addEventListener("load",init);//methode addEventlistener(event , gestionnaire , bubbling

 function init() {
  document.getElementById("output").innerHTML = "salut tttt";

  //pareil que dans champs texte.
  document.getElementById("output2").value = "salut toi";
}

//vous etes de base dans l'objet window!!

//window.console.log("xxxx");
//window.console.log("see?");

//on ecrit hello dans le paragraphe.










