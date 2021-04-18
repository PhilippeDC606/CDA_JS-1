class Customer {

  constructor(name, scoreFid) {
    this.name = name;
    this.scoreFid = scoreFid;
  }

  //methodes objet

  addBonus(bonus){
      this.scoreFid+= bonus;
  }

  //Methode de classe
  static sayHello(){
      console.log("salut");
  }
  toString(){
      console.log()
  }

}
