class Samochod{
    constructor(Marka,Model,rok,kolor,predkosc){
        this.Marka = Marka;
        this.Model = Model;
        this.rok = rok;
        this.kolor = kolor;
        this.predkosc = predkosc;
    }
    Speed(value){
    this.predkosc += value;
    }
    getInfo(){
        return `${this.Marka} ${this.Model} ${this.rok} ${this.kolor} ${this.predkosc}`
    }

}

const BMW = new Samochod("BMW","M5",2023,"Black",120)
Samochod.Speed(50)
function Car(){
    console.log(getInfo())
}