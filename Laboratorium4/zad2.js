class Person{
    constructor(FirstName,LastName,Numer,ocena1,ocena2,ocena3){
        this.FirstName = FirstName;
        this.LastName = LastName;
        this.Numer = Numer;
        this.ocena1 = ocena1;
        this.ocena2 = ocena2;
        this.ocena3 = ocena3;
    }
    fullName(){
        return this.FirstName+" "+this.LastName;
    }
    scrednia(){
        return (this.ocena1+this.ocena2+this.ocena3)/3;
    }
}
const Taras = new Person ("Taras","Dushenko","w68139",5,5,5)
function pep(){
    console.log(Taras.fullName(), Taras.Numer ,Taras.scrednia() + " ścredia ocena");
}
pep()