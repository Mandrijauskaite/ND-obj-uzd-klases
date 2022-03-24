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

console.log('3., 4.---------');
// Sukurti klasę Troleibusas. Konstruktoriuje sukurti savybę keleiviuSkaicius kuri yra lygi 0. Parašyti du metodus: ilipa(keleiviuSkaicius) ir islipa(keleiviuSkaicius). O taip pat parašyti metoda vaziuoja(), kuris į konsolę išvestų troleibusu važiuojančių keleivių skaičių. Atkreipkite dėmesį, kad troleibusu važiuoti neigiamas keleivių skaičius negali.

// (STATIC) Sukurti metodą keleiviuSkaiciusVisuoseTroleibusuose(), kuris rodytų bendrą keleivių skaičių visuose Troleibusas objektuose. Bendram kelevių skaičiaus skaičiavimui sukurkite statinį metodą bendrasKeleiviuSkaicius(keleiviuSkaicius), kuris pridėtų arba atimtų keleivius iš statinės savybės visiKeleiviai (kurioje yra įrašytas bendras keleivių skaičius). Taip pat atitinkamai modifikuokite metodus ilipa(keleiviuSkaicius) ir islipa(keleiviuSkaicius).


class Troleibusas { // Sukurti klasę Troleibusas.

    static keleiviuSkaiciusVisuoseTroleibusuose() { // Sukurti metodą keleiviuSkaiciusVisuoseTroleibusuose()
        console.log(`keleiviai: ${this.visiKeleiviai}`); // kuris rodytų bendrą keleivių skaičių visuose Troleibusas objektuose. 
    }

    static bendrasKeleiviuSkaicius(keleiviuSkaicius) { // Bendram kelevių skaičiaus skaičiavimui sukurkite statinį metodą bendrasKeleiviuSkaicius(keleiviuSkaicius),
        this.visiKeleiviai += keleiviuSkaicius; // kuris pridėtų arba atimtų keleivius iš statinės savybės visiKeleiviai (kurioje yra įrašytas bendras keleivių skaičius)
    }

    static visiKeleiviai = 0;


    constructor () { 
        this.keleiviuSkaicius  = 0; // Konstruktoriuje sukurti savybę keleiviuSkaicius kuri yra lygi 0.
        }

            ilipa(keleiviuSkaicius) { // Parašyti du metodus: ilipa(keleiviuSkaicius)
                this.keleiviuSkaicius += keleiviuSkaicius;
                this.constructor.visiKeleiviai += keleiviuSkaicius // Taip pat atitinkamai modifikuokite metodus ilipa(keleiviuSkaicius)
            }

            islipa(keleiviuSkaicius) { // Parašyti du metodus: islipa(keleiviuSkaicius)
                if (this.keleiviuSkaicius - keleiviuSkaicius < 0) {
                    this.keleiviuSkaicius = 0;
                } else {
                    this.keleiviuSkaicius -= keleiviuSkaicius;
                this.constructor.visiKeleiviai -= keleiviuSkaicius; //Taip pat atitinkamai modifikuokite metodus islipa(keleiviuSkaicius).
                }
            }

            vaziuoja() { // O taip pat parašyti metoda vaziuoja(),
                console.log(this.keleiviuSkaicius); // kuris į konsolę išvestų troleibusu važiuojančių keleivių skaičių. 
            }

}

const bus1 = new Troleibusas;
const bus2 = new Troleibusas;
bus1.ilipa(18) 
bus1.ilipa(3)
bus1.islipa(1) 

bus1.vaziuoja()

bus2.ilipa(3) 
bus1.ilipa(18)
bus1.islipa(1) 

bus1.vaziuoja()

Troleibusas.keleiviuSkaiciusVisuoseTroleibusuose();

console.log('5.---------');
// (MAP) Sukurti klasę PirkiniuKrepselis. Konstruktoriuje sukurti savybę turinys, kuri yra Map tipo objektas. Sukurti tris metodus: idetiSureli(kiekis), idetiPieno(kiekis), idetiDuonos(kiekis). Parašyti metodą krepselioTurinys(), kuris į konsolę išvestų produktų sąrašą (turinys kintamąjį). Pridėti tuos pačius produktus galima po kelis kartus, tokiu atveju produktų kiekis turėtų sumuotis.

class PirkiniuKrepselis { // (MAP) Sukurti klasę PirkiniuKrepselis.

    constructor () { // Konstruktoriuje sukurti savybę turinys, kuri yra Map tipo objektas.
        this.turinys = [];
    }

    idetiSureli(kiekis) { // Sukurti tris metodus: idetiSureli(kiekis), 
        for (let i = 0; i<kiekis; i++) { // Pridėti tuos pačius produktus galima po kelis kartus, tokiu atveju produktų kiekis turėtų sumuotis.
            this.turinys.push('SURELIS');
        }
    }

    idetiPieno(kiekis) { // Sukurti tris metodus: idetiPieno(kiekis), 
        for (let i = 0; i<kiekis; i++) { //Pridėti tuos pačius produktus galima po kelis kartus, tokiu atveju produktų kiekis turėtų sumuotis.
            this.turinys.push('PIENAS');
            }
    }
    
    idetiDuonos(kiekis) { // Sukurti tris metodus:  idetiDuonos(kiekis).

    }

    krepselioTurinys() { //Parašyti metodą krepselioTurinys(),
        console.log(this.turinys); // kuris į konsolę išvestų produktų sąrašą (turinys kintamąjį)
    }

}
const bag1 = new PirkiniuKrepselis;

bag1.idetiSureli(2);
bag1.idetiPieno(5);
bag1.idetiDuonos(1);
bag1.idetiSureli(10);

console.log(bag1);


console.log('8.---------');
// Sukurti klasę Stikline. Sukurti savybes turis ir kiekis. Turis turi būti pasirenkamas objekto kūrimo metu. Parašyti metodą ipilti(kiekis), kuris keistų savybę kiekis. Jeigu stiklinės tūris yra mažesnis nei pilamas kiekis- kiekis netelpa ir būna lygus tūriui. Parašyti metodą ispilti(), kuris grąžiną kiekį. Pilant išpilamas visas kiekis, tas kas netelpa, nuteka per stalo viršų.  Sukurti metodą stiklinejeYra(), kuris į konsolę atspausdintų kiek stiklinėje yra skysčio. Sukurti tris stiklinės objektus su tūriais: 200, 150, 100. Didžiausią pripilti pilną ir tada ją ispilti į mažesnę stiklinę, o mažesnę į dar mažesnę.

class Stikline { // Sukurti klasę Stikline. Turis turi būti pasirenkamas objekto kūrimo metu.
    constructor(V) { // Sukurti savybes turis ir kiekis.
        this.turis = V;
        this.kiekis = 0; 
        this.kiekisAntStalo
    }

    ipilti(kiekis) { // Parašyti metodą ipilti(kiekis), kuris keistų savybę kiekis.
        if (this.turis < kiekis) { // Jeigu stiklinės tūris yra mažesnis nei pilamas kiekis-
        this.kiekisAntStalo = kiekis - this.turis // kiekis netelpa ir būna lygus tūriui.
        this.kiekis = this.turis
       kiekis = this.kiekis // Pilant išpilamas visas kiekis,
       console.log(`issipyle ${this.kiekisAntStalo}`); // tas kas netelpa, nuteka per stalo viršų.
        } else {
            this.kiekis += kiekis
        }
        
    }

    ispilti() { //  Parašyti metodą ispilti(), kuris grąžiną kiekį.
        
        this.kiekis -= this.kiekis; // kuris grąžiną kiekį.
    }

    stiklinejeYra() { //  Sukurti metodą stiklinejeYra(),
        console.log(this.kiekis);  // kuris į konsolę atspausdintų kiek stiklinėje yra skysčio.
    }
}

const stiklineDidziausia = new Stikline(200); // Sukurti tris stiklinės objektus su tūriais: 200, 150, 100.
const stiklineVidurine = new Stikline(150);
const stiklineMaziausia = new Stikline(100);
stiklineDidziausia.ipilti(200) // Didžiausią pripilti pilną
console.log(stiklineDidziausia);
stiklineDidziausia.ispilti(); 
console.log(stiklineDidziausia);
stiklineDidziausia.ispilti()

stiklineVidurine.ipilti(200) // ir tada ją ispilti į mažesnę stiklinę, 
console.log(stiklineVidurine);
stiklineVidurine.ispilti(150)

stiklineMaziausia.ipilti(150) // o mažesnę į dar mažesnę.
console.log(stiklineMaziausia);


console.log('9.---------');
// Sukurti klasę Grybas. Sukurti klasę Krepsys. Krepsys turi savybę dydis,kuriai konstruktoriuje yra priskiriama reikšmė 500 ir savybę prikrauta (kuri pradžioje lygi 0). Grybas turi tris savybes, kurios taip pat yra paskaičiuojamos konstruktoriuje: valgomas, sukirmijes, svoris. Kuriant Grybo objektą jo savybės turi būti atsitiktinai (rand funkcija) priskiriamos taip: valgomas- true arba false, sukirmijes- true arba false ir svoris- nuo 5 iki 45. Eiti grybauti, t.y. Kurti naujus Grybas objektus, jeigu nesukirmijęs ir valgomas dėti į Krepsi objektą, t.y. Vykdyti deti(grybas) metodą kol bus pririnktas pilnas krepšys nesukirmijusių ir valgomų grybų (gali būti truputį daugiau nei dydis).

class Krepsys { // Sukurti klasę Krepsys.
    constructor() { // Krepsys turi savybę dydis,kuriai konstruktoriuje yra priskiriama reikšmė 500 ir savybę prikrauta (kuri pradžioje lygi 0)
        this.dydis = 500; 
        this.prikrauta = 0;
    }

        deti(grybas) { // Vykdyti deti(grybas) metodą
            this.prikrauta++ // kol bus pririnktas pilnas krepšys nesukirmijusių ir valgomų grybų (gali būti truputį daugiau nei dydis).
        }

} 

const krepsys1 = new Krepsys

class Grybas { // Sukurti klasę Grybas.
    constructor () { // Grybas turi tris savybes, kurios taip pat yra paskaičiuojamos konstruktoriuje: valgomas, sukirmijes, svoris.
        this.valgomas = Math.random() < 0.5; // Kuriant Grybo objektą jo savybės turi būti atsitiktinai (rand funkcija) priskiriamos taip: valgomas- true arba false, sukirmijes- true arba false ir svoris- nuo 5 iki 45.
        this.sukirmijes = Math.random() < 0.5;
        this.svoris = this.rand(5,45)
    }

    rand(min, max) { // 5dedame f-lę kai skaičiuojame random
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

}

const grybuArr = []; // Kurti naujus Grybas objektus, jeigu nesukirmijęs ir valgomas dėti į Krepsi objektą,
for (let i = 0; i < 1500; i++) {
grybuArr.push(new Grybas); 
    if (grybuArr[i].valgomas === true && grybuArr[i].sukirmijes === false) {
        krepsys1.deti(grybuArr[i]);
    }
    if (krepsys1.prikrauta > 500) {
        break
}}
