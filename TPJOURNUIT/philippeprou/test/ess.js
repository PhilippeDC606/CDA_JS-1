'use strict';

//essential.JS
//Fonctions inline avec fonction anonyme

let maFonction = function(){

    console.log("hello world");
};
//fonction flechée
let mafonction2 = ()=>{
    console.log("hello world v2");
};
//fonction classic

function fonctionClassique(){
    console.log("hello world v3");
}

maFonction();
mafonction2();
fonctionClassique();



//ARRAYS:
let monTableau =[];

//json: chaine de caracteres
// let monObjet ={};


// console.log(monTableau)
// console.log(monObjet)

// //ARRAYS ESSAIS

// let listeFruits=["Banane","cerise"];

// console.log("1"+listeFruits);
// //nb elements
// console.log(listeFruits.length);

//..............Methodes pour ajouter ou supprimer en fin et en debut de list

// listeFruits.push("Fraise");
// console.log("2"+listeFruits);

// listeFruits.pop();
// console.log("3"+ listeFruits);

// listeFruits.unshift("pomme")
// console.log("4"+listeFruits);

// listeFruits.shift()
// console.log(""+listeFruits);

//............parcours avec foreach

// listeFruits.forEach((elem)=>console.log(elem));

// //..........chaines de caracteres 
// let monImage = "paris.jpeg";

//......... on recherche l'extensions 
// let postDuPoint =monImage.indexOf('.');
// console.log(postDuPoint); //5

// let extension=monImage.substring(6,10)
// console.log(extension)

// let extension=monImage.substring(postDuPoint+1)
// console.log(extension)




//...............OBJETS

// let  client1={
//     name:'Bob',
//     scoreFid:100,
//     addBonus:function(bonus){this.scoreFid +=bonus},
//     display:function(){console.log("scorefied ="+this.scoreFid+"name=="+this.name);},
//     //display:()=>{console.log(client1.name+client1.scoreFid);}
    
// }
// console.log(client1.name);
// console.log(client1.scoreFid);
// client1.addBonus(150)
// console.log(client1.scoreFid);

// client1.display();

//Objets a partir de fonctions constructrices prototypales

function Player(name, score){
    this.name = name;
    this.score = score;

    // fonction anonyme
    this.addBonus = function(bonus){
        this.score += bonus;
    }
    // avec une arrow fonction
    this.addBonus2 = (bonus)=>{
        this.score += bonus;
    }
}
let bob = new Player('Bob', 220);
let monika = new Player('Monika', 20);
console.log(bob.name);
console.log(monika.score);
monika.addBonus(100);
console.log(monika.score);
monika.addBonus2(1000);
console.log(monika.score);

let customer1=new Customer("bob",1200);
let customer2=new customer("monika",1700);
customer1.toString;
customer2.toString;
customer1.addBonus(3000);


