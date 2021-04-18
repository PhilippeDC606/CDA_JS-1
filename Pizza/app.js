// document.getElementById("form").addEventListener("submit",function(e){
//   e.preventDefault();


//   let errUser;
//   let pseudo = document.getElementById("user");
//   let pass = document.getElementById("mdp");

  
// if (!pseudo.value){
//   errUser = "renseigner un pseudo";
// }
// if (!mdp.value){
//   errMdp = "renseigner un Mot de pass";
// }

// if(errUser){
//   document.getElementById("errUser").innerHTML=errUser;
// }
// if(errMdp){
//   document.getElementById("errMdp").innerHTML=errMdp;
// }
// else{

//   alert("formulaire envoyé !");
// }

// document.getElementById("errUser").style.color="red"
// document.getElementById("errMdp").style.color="red"
// })


let form = document.getElementById("form");

form.addEventListener("submit",function(e){

  let utilisateur = document.getElementById("user");

  if(utilisateur.value.trim()==""){
    
    let errUser = document.getElementById("errUser")
    errUser.innerHTML="Entrez un nom d utilisateur SVP !!";

    errUser.style.color="red";
    e.preventDefault();
  }

})



