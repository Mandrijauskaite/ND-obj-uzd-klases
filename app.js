console.log('-----View – Word Wrap(teksta iš vienos eilutės padaro į kelias----');

console.log('1. ir 7.---------');
// Sukurti klasę Kibiras1. Konstruktoriuje sukurti savybę akmenuKiekis  kuri lygi 0. Parašyti šiai klasei metodus, pridedančius akmenis: prideti1Akmeni() pridetiDaugAkmenu(kiekis) ir metodą išvedantį akmenų kiekį į konsolę- kiekPririnktaAkmenu(). Sukurti vieną kibiro objektą ir pademonstruoti akmenų rinkimą į kibirą ir rezultatų išvedimą.
// (STATIC) Klasėje Kibiras1 (pirmas uždavinys) sukurti statinį metodą akmenuSkaiciusVisuoseKibiruose(), kuris rodytų bendrą visuose kibiruose pririnktų akmenų kiekį (visuose sukurtuose Kibiras objektuose). Skaičiuoti akmenim, kurie buvo surinkti visuose objektuose, sukurkite statini metodą bendrasAkmenuSkaicius(akmenuSkaicius), kuris pridėtų prie statinės savybės visiAkmenys (kurioje yra įrašytas ir saugomas bendras akmenų skaičius). Taip pat atitinkamai modifikuokite metodus prideti1Akmeni(),  pridetiDaugAkmenu(kiekis).

class Kibiras1 { // Sukurti klasę Kibiras1.

    static akmenuSkaiciusVisuoseKibiruose() { //sukurti statinį metodą akmenuSkaiciusVisuoseKibiruose()
        console.log(`Bendras visuose kibiruose pririnktų akmenų kiekis: ${this.visiAkmenys}`); // kuris rodytų bendrą visuose kibiruose pririnktų akmenų kiekį (visuose sukurtuose Kibiras objektuose).
    }

    static bendrasAkmenuSkaicius(akmenuSkaicius) { // sukurkite statini metodą bendrasAkmenuSkaicius(akmenuSkaicius)
        this.visiAkmenys += akmenuSkaicius; // Skaičiuoti akmenim, kurie buvo surinkti visuose objektuose (kuris pridėtų prie statinės savybės visiAkmenys (kurioje yra įrašytas ir saugomas bendras akmenų skaičius))
    }

    static visiAkmenys = 0;
    constructor() {
        this.akmenuKiekis = 0; // Konstruktoriuje sukurti savybę akmenuKiekis  kuri lygi 0
    }

    prideti1Akmeni() { // Parašyti šiai klasei metodus, pridedančius akmenis: prideti1Akmeni()
        this.akmenuKiekis += 1; // kuris pridėtų prie statinės savybės visiAkmenys (kurioje yra įrašytas ir saugomas bendras akmenų skaičius)
        this.constructor.visiAkmenys += 1 //
    }
    
    pridetiDaugAkmenu(kiekis) { // // Parašyti šiai klasei metodus, pridedančius akmenis: pridetiDaugAkmenu(kiekis)
        this.akmenuKiekis += kiekis;
        this.constructor.visiAkmenys += kiekis
    }

    kiekPririnktaAkmenu() { // metodą išvedantį akmenų kiekį į konsolę- kiekPririnktaAkmenu().
        console.log(this.akmenuKiekis);
    }

}
const kibiras2 = new Kibiras1; //Sukurti vieną kibiro objektą ir pademonstruoti akmenų rinkimą į kibirą ir rezultatų išvedimą.
const kibiras3 = new Kibiras1;

kibiras2.prideti1Akmeni();
kibiras2.pridetiDaugAkmenu(6);

kibiras2.kiekPririnktaAkmenu();
console.table(kibiras2);

kibiras3.pridetiDaugAkmenu(10);

Kibiras1.akmenuSkaiciusVisuoseKibiruose();

console.log('2.---------');
// Sukurti klasę Pinigine. Konstruktoriuje sukurti dvi savybes popieriniaiPinigai ir metaliniaiPinigai. Parašyti metodą ideti(kiekis), kuris prideda pinigus į piniginę. Jeigu kiekis nedidesnis už 2, tai prideda prie metaliniaiPinigai, jeigu kitaip- prie popieriniaiPinigai. Parašykite metodą skaiciuoti(), kuris suskaičiuotų ir išvestų į konsolę popieriniaiPinigai ir metaliniaiPinigai sumą. Sukurti klasės objektą ir pademonstruoti veikimą. Nesvarbu kokios popierinės kupiūros ir metalinės monetos egzistuoja realiame pasaulyje.

class Pinigine { // Sukurti klasę Pinigine.
    constructor () { 
    this.popieriniaiPinigai = 0; //Konstruktoriuje sukurti dvi savybes popieriniaiPinigai
    this.metaliniaiPinigai = 0; //Konstruktoriuje sukurti dvi savybes metaliniaiPinigai
    }

    ideti(kiekis) {
        if (kiekis < 2) { // Jeigu kiekis nedidesnis už 2
            this.metaliniaiPinigai += kiekis // tai prideda prie metaliniaiPinigai,
        } else {
            this.popieriniaiPinigai += kiekis // jeigu kitaip- prie popieriniaiPinigai.
        }
    }

    skaiciuoti() { // Parašykite metodą skaiciuoti(),
        return this.metaliniaiPinigai + this.popieriniaiPinigai // kuris suskaičiuotų ir išvestų į konsolę popieriniaiPinigai ir metaliniaiPinigai sumą.
    }
}

const pinigine1 = new Pinigine;

pinigine1.ideti(20);  // Sukurti klasės objektą ir pademonstruoti veikimą.
pinigine1.ideti(1)
pinigine1.ideti(1)
pinigine1.ideti(8)
pinigine1.ideti(1)
pinigine1.ideti(1)
console.log(pinigine1);

console.log('3.---------');
// Sukurti klasę Troleibusas. Konstruktoriuje sukurti savybę keleiviuSkaicius kuri yra lygi 0. Parašyti du metodus: ilipa(keleiviuSkaicius) ir islipa(keleiviuSkaicius). O taip pat parašyti metoda vaziuoja(), kuris į konsolę išvestų troleibusu važiuojančių keleivių skaičių. Atkreipkite dėmesį, kad troleibusu važiuoti neigiamas keleivių skaičius negali.

console.log('4.---------');

console.log('5.---------');

console.log('6.---------');

console.log('6.---------');