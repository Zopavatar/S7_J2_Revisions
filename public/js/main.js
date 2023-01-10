//STRING

//exo 1

//let askPrenom = prompt("Quel est votre prénom, please ?");
//alert(askPrenom[0]);


//exo 2

//alert(askPrenom.substring(1));



//exo 3

//let bisPrenom = prompt("Quel est votre prénom, la mif ?");

/*if(bisPrenom.length > 5){
    alert(bisPrenom[5]);
} else {
    alert("Votre prénom n'est pas suffisamment long");
}*/



//exo 4

/*if(bisPrenom.length > 5){
    alert(bisPrenom[5]);
} else {
    alert(`Votre prénom n'est pas suffisamment long, il n'était que de ${bisPrenom.length} caractères`);
    alert(bisPrenom[bisPrenom.length - 1]);
}*/



//exo 5

/*let ask = prompt("Veuillez entrer un truc");

alert(ask.toLowerCase());
alert(ask.toUpperCase());
alert(ask[0].toLowerCase()+(ask.substring(1)).toUpperCase());
alert(ask[0].toUpperCase()+(ask.substring(1)).toLowerCase());*/








//ARRAY

//EXO 1

let arrayVide = [];

console.log(arrayVide);
console.log(typeof arrayVide);


//EXO 2

let tab = ["string",40,true,[]];

console.log(tab[0]);
console.log(tab[1]);
console.log(tab[2]);
console.log(tab[3]);


//EXO 3

let newTab = ["le 1","le 2","le 3","le 4","le 5"];

console.log(newTab[2]);

//exo 3.2
console.log(newTab[0]);
console.log(newTab[newTab.length-1]);

//exo 3.3
console.log(newTab[4][0]);

//exo 3.4
console.log(newTab[4].substring(1));

//exo 3.5
console.log(newTab[0][0].toLowerCase()+newTab[0][1].toUpperCase());


//exo 3.6
console.log(`${newTab[0]} , ${newTab[2]}`);




//EXO 4

//exo 4.1
let arrayEmpty = ["Jean", "Pierre", "Jacqueline", "Hugues", "Marlène"];

/*let firstPrenom = prompt("Veuillez entrer un prenom, siouplait 1/5");
let secondPrenom = prompt("Veuillez entrer un prenom, siouplait 2/5");
let thirdPrenom = prompt("Veuillez entrer un prenom, siouplait 3/5");
let fourthPrenom = prompt("Veuillez entrer un prenom, siouplait 4/5");
let fifthPrenom = prompt("Veuillez entrer un prenom, siouplait 5/5");*/


//arrayEmpty.push(firstPrenom,secondPrenom,thirdPrenom,fourthPrenom,fifthPrenom);

console.log(arrayEmpty);


//exo 4.2
arrayEmpty.unshift("Maxence");
arrayEmpty.push("Louise");

console.log(arrayEmpty);

//exo 4.3
arrayEmpty.splice(0,1);
arrayEmpty.splice(arrayEmpty.length-1,1);

console.log(arrayEmpty);



//exo 4.4
arrayEmpty.splice(0,2);
arrayEmpty.splice(arrayEmpty.length-2,2);

console.log(arrayEmpty);


//exo 4.5
arrayEmpty = ["Jean", "Pierre", "Jacqueline", "Hugues", "Marlène"];

arrayEmpty.splice(0,1,"Ayhan");
arrayEmpty.splice(arrayEmpty.length-2,1,"Elias");

console.log(arrayEmpty);


//exo 4.6
newTab = ["Ayoub", "Jamila", "Alex", "Natchez", "Bene"];

newTab.splice(newTab.indexOf("Jamila"),1,"Zulma");
newTab.splice(newTab.indexOf("Ayoub"),1,"Adame");

console.log(newTab);


//exo 4.7
newTab.splice(newTab.indexOf("Natchez"),1);
newTab.splice(newTab.indexOf("Bene"),1);

console.log(newTab);



//EXO 5
/*let classe = [];

let jean = "Jean";
classe.push(jean);
alert(`${jean} vient d'entrer en classe`);

console.log(classe);


classe.push(jean);
alert(`${jean} vient d'entrer en classe`);

console.log(classe);


classe.push(jean);
alert(`${jean} vient d'entrer en classe`);

console.log(classe);


classe.push(jean);
alert(`${jean} vient d'entrer en classe`);

console.log(classe);


classe.push(jean);
alert(`${jean} vient d'entrer en classe`);

console.log(classe);


classe.push(jean);
alert(`${jean} vient d'entrer en classe`);

console.log(classe);


classe.push(jean);
alert(`${jean} vient d'entrer en classe`);

console.log(classe);


classe.push(jean);
alert(`${jean} vient d'entrer en classe`);

console.log(classe);


classe.push(jean);
alert(`${jean} vient d'entrer en classe`);

console.log(classe);

classe.push(jean);
alert(`${jean} vient d'entrer en classe`);

console.log(classe);



// exo 5.1
let marc = "marc"
classe.push(marc);
alert(`${marc} vient d'entrer en classe`);

console.log(classe);

let paul = "paul"
classe.push(paul);
alert(`${paul} vient d'entrer en classe`);

console.log(classe);


//exo 5.2
let autreClasse = [];

autreClasse.push(classe[classe.indexOf(marc)]);
alert(`${classe.indexOf(marc)} s'est trompé de classe. Il va dans la bonne`);
classe.splice(classe.indexOf(marc),1);

console.log(autreClasse);


autreClasse.push(classe[classe.indexOf(paul)]);
alert(`${classe.indexOf(paul)} s'est trompé de classe. Il va dans la bonne`);
classe.splice(classe.indexOf(paul),1);


console.log(autreClasse);


console.log(classe);
console.log(autreClasse);*/








//SWITCH

//Exo 1
/*let age = prompt("Quel est votre age ?");

switch (true) {
    case age == 18:
        console.log("Tu es majeur");
        break;
    
    case age == 25:
        console.log("Un quart de siècle, ça se fête ! (Tu te sens vieux, Quadri ?");
        break;

    case age == 50:
        console.log("1/2 siècle, c'est quelques chose");
        break;
}*/


//Exo 2
/*let mot = prompt("DOnnez un mot, làààà");

switch (true){
    case typeof (mot*1) == "number":
        console.log("La valeur indiquée est un nombre");
        break;

    case typeof mot == "string":
        console.log("La valeur indiquée est un string");
        break;

    default:
        console.log("C'est un autre truc");
        break;
}*/


//Exo 3
const date = new Date();
let day = date.getDay();

switch (true){
    case day == 1:
        console.log("Lundi");
        break;
    case day == 2:
        console.log("Mardi");
        break;
    case day == 3:
        console.log("Mercredi");
        break;
    case day == 4:
        console.log("Jeudi");
        break;
    case day == 5:
        console.log("Vendredi");
        break;
    case day == 6:
        console.log("samedi");
        break;
    case day == 7:
        console.log("Dimanche");
        break;
    default:
        console.log("Lundi");
        break;
}


//Exo 4

/*let mdp = prompt("Donnez un mdp");
let login = prompt("Entrez votre mdp");

switch (true) {
    case mdp == login:
        alert("connecté");
        break;

    case mdp !== login:
        alert("Erreur de mot de passe");
        break;
}*/


//Exo 5
let niveau = 75;

switch (true){
    case niveau >= 90:
        console.log("Tu as un niveau de coach");
        break;

    case niveau >= 70:
        console.log("Tu peux mieux faire");
        break;

    case niveau >= 50:
        console.log("Attention, il faut travailler plus !");
        break;

    default:
        console.log("C'est pas boooooon. A travailler d'avantage");
        break;
}


//exo 6

/*let result = prompt("Quel est le résultat du test ? A, B, C ou D ?");

switch(true){
    case result == "A":
        console.log("Ha ouaaaais");
        break;
    case result == "B":
        console.log("Pas mal !");
        break;
    case result == "C":
        console.log("Mouais");
        break;
    case result == "D":
        console.log("Vraiment pas dingue...");
        break;
    default:
        console.log("Veuillez entrer une note");
        break;
}*/





//IF ELSE

//Exo 1
let prenom = "Charlotte";

if (prenom == "Charlotte"){
}


//Exo 2
if (prenom == "Charlotte"){
    console.log("Je suis dans le if");
}

console.log(prenom);


//Exo 3
let agePerso1 = 30;
let agePerso2 = 40;
let comparaison = (agePerso1 == agePerso2);

if(comparaison == true){
    console.log("Je suis dans le if");
}
else{
    console.log("Je suis dans le else");
}

//logique

//1
/*let chiffre1 = prompt("Donnez un chiffre");
let chiffre2 = prompt("Donnez un autre chiffre");

if (isNaN(chiffre1) == true || isNaN(chiffre2) == true){
    console.log("C'est pas un chiffre, petit filou");
} else if (chiffre1 > chiffre2){
    console.log(chiffre1);
} else if (chiffre2 > chiffre1){
    console.log(chiffre2);
} else if (chiffre1 == chiffre2){
    console.log("C'est pas un chiffre, tête de noeudLes deux chiffres sont égaux");
} */

//2
/*let chiffre1 = prompt("Donnez un chiffre");

if(chiffre1%2 == 1){
    console.log("ce chiffre est impair");
}else{
    console.log("Ce chiffre est pair");
}*/


//3
/*let elPrenom = prompt("DOnnez votre prénom, please");

if(elPrenom.length < 5){
    console.log("Votre prénom a moins de 5 caractères");
} else if(elPrenom.length == 5){
    console.log("Votre prénom fait 5 caractères");
} else if(elPrenom.length > 5){
    console.log("Votre prénom fait plus de 5 caractères");
}*/


//4
/*let prenom1 = prompt("Donnez un prénom, siouplait");
let prenom2 = prompt("Donnez un second prénom, siouplait");

if(prenom1.length < prenom2.length){
    console.log(`Le prenom ${prenom1} a moins de caractères que le prénom ${prenom2}`);
} else if(prenom1.length == prenom2.length){
    console.log(`Le prenom ${prenom1} a autant de caractères que le prénom ${prenom2}`);
} else if(prenom2.length < prenom1.length){
    console.log(`Le prenom ${prenom1} a plus de caractères que le prénom ${prenom2}`);
}*/


//5
let vitesse = 90;

if(vitesse < 50){
    console.log(`C'est good, vous pouvez continuer à rouler à cette vitesse. vitesse => ${vitesse} km/h`);
} else if(vitesse == 50){
    console.log(`Attention, vous roulez à la vitesse limite. vitesse => ${vitesse} km/h`);
} else if(vitesse > 50){
    console.log(`C'est pas good ça, vous devez décélérer, 'spèce de Fangio. vitesse => ${vitesse} km/h`);
}


//6
/*let demandePrenom = prompt("Quel est votre prénom ?");
let demandeAge = prompt("Quel est votre age ?");

if(demandeAge >= 18){
    console.log(`Salut,${demandePrenom}! Vu que tu as ${demandeAge} ans, ce soir tu peux sortir en discothèque`);
}else if(demandeAge < 18){
    console.log(`Salut,${demandePrenom}! Vu que tu as seulement ${demandeAge} ans, ce soir tu peux pleurer ton seum dans ta chambre.`);
}*/


//7
/*let unNombre = prompt("Donnez un nombre");
let unAutre = prompt("Donnez un nombre");
let operateur = prompt("Donnez un opérateur: * - + ou /");


if (operateur == "*"){
    console.log(`${unNombre} * ${unAutre} = ${unNombre*unAutre}`);
} else if (operateur == "-"){
    console.log(`${unNombre} - ${unAutre} = ${unNombre-unAutre}`);
} else if (operateur == "/"){
    console.log(`${unNombre} / ${unAutre} = ${unNombre/unAutre}`);
} else if (operateur == "+"){
    console.log(`${unNombre} + ${unAutre} = ${(unNombre*1)+(unAutre*1)}`);
}*/






//BOUCLES

//Exo 1
for(let i = 0 ; i < 5 ; i++){
    console.log("Charlotte");
    console.log(i);
}

//Exo2
let arrayCoding27 = ["Enide","Charlotte","Fadia"];

for (let i = 0; i < arrayCoding27.length; i++){
    console.log(`Bonjour ${arrayCoding27[i]}`);
}

//Exo3
/*let number = prompt("Entrez un nombre");
let i = -1;

while (i < number){
    i++;
    console.log(i);
}

//Exo4
for (let i = 0; i <= number; i+=2){
    console.log(i);
}

//Exo5
for (let i = 0; i <= number; i++){
    console.log(i);

    if(i > 0 && i%2 == 0){
        console.log(`Le nombre ${i} est pair`);
    }
}*/

//Exo6
let molengeek = [];
let eleve = 0;

do {
    eleve++;

    molengeek.push(`etudiant ${eleve}`);
} while (molengeek.length < 5);

console.log(molengeek);


//Exo7
let laCoding13 = ["Martin","Maxime","Jordano","Yasmina","Kawtar","Valentin","Oussam","Cactus","Fanny","Sergen","Karis","Kadri","Piere","Zidane","Imad","Abdel"];

laCoding13.forEach(element =>{
    if (laCoding13.indexOf(element) == 0){
        console.log(`L'index de ${element} est null`);
    } else if(laCoding13.indexOf(element)%2 == 0){
        console.log(`L'index de ${element} est pair`);
    } else {
        console.log(`L'index de ${element} est impair`);
    }
});

console.log("INDICES PAIRS:");
laCoding13.forEach(element =>{
    if (laCoding13.indexOf(element)%2 == 0){
        console.log(element);
    }
});

console.log("INDICES IMPAIRS:");
laCoding13.forEach(element =>{
    if (laCoding13.indexOf(element)%2 == 1){
        console.log(element);
    }
});


//Exo8
//part 1
let liste =["paul", "pierre","jacques","lucette","olaf","jeannine","odette","auguste"];

liste.forEach(element => {
    console.log(element);
    console.log(element[0]);
    console.log(element[1]); 
    console.log(element[1]+element);
});

console.log("INDICE PAIR:")

liste.forEach(element => {if(liste.indexOf(element)%2 == 0){console.log(element)}});

//part 2
//1
liste.forEach(element => {
    if(liste.indexOf(element)%2 == 1){
        console.log(element.toUpperCase());
    }
});

//2
liste.forEach(element => {
    if(liste.indexOf(element)%2 == 0){
        console.log(element[0].toUpperCase() + element.substring(1));
    }
});

//3
liste.forEach(element => {
    if(liste.indexOf(element)%2 == 1 && element.length > 4){
        console.log(element);
    }
});

//4
liste.forEach(element => {
    if(liste.indexOf(element)%2 == 0 && element.length > 4){
        console.log(element[0].toUpperCase());
    }
});

//5
liste.forEach(element => {
    if(element[0] == "a" || element[0] == "b" || element[0] == "c" || element[0] == "d" || element[0] == "e" || element[0] == "f"){
        console.log(element);
    }
});

//6
liste.forEach(element => {
    if(element.length > 10 && (element[0] == "a" || element[0] == "b" || element[0] == "c" || element[0] == "d" || element[0] == "e" || element[0] == "f")){
        console.log(element);
    }
});


//part3
//1
liste.forEach(element => {
    if(element.length < 5 && (element[0] == "a" || element[0] == "b" || element[0] == "c" || element[0] == "d" || element[0] == "e" || element[0] == "f")){
        console.log(element[0].toUpperCase() + element.substring(1));
    }
});

//2
liste.forEach(element => {
    if(liste.indexOf(element)%2 == 1 && element.length > 4 && (element[0] == "k" || element[0] == "c" || element[0] == "m" || element[0] == "f" || element[0] == "y" || element[0] == "n" || element[0] == "a" || element[0] == "e" || element[0] == "p" || element[0] == "o")){
        console.log(element);
    }
});

//3
liste.forEach(element => {
    if(liste.indexOf(element)%2 == 0 && element.length > 5 && (element[0] == "k" || element[0] == "c" || element[0] == "m" || element[0] == "f" || element[0] == "y" || element[0] == "n" || element[0] == "a" || element[0] == "e" || element[0] == "p" || element[0] == "o")){
        console.log((element[0].toLowerCase() + element[1].toUpperCase() + element.substring(2)).substring(0,element.length-1) + element[element.length-1].toUpperCase());
    }
});


//4
let reductionTab = [];

liste.forEach(element => {
    if(liste.indexOf(element)%2 == 0 && element.length < 7 && (element[0] == "k" || element[0] == "m" || element[0] == "f" || element[0] == "y" || element[0] == "n" || element[0] == "a" || element[0] == "e" || element[0] == "o")){
        reductionTab.push(element[0].toLowerCase() + element[1].toUpperCase());
    }
});

console.log(reductionTab.reduce((a, b) => a + b));







//FUNCTION
//exo1
function bonjour(){
    console.log("bonjour");
}

bonjour();


//exo2
function calcul(){
    let calcul = 5+5;
    console.log(calcul);
}

calcul();


//exo3
function salutation(appelation){
    console.log(`Bonjour,${appelation}`);
}

salutation("Peter");


//exo4
function type(element1,element2,element3){
    console.log(typeof element1);
    console.log(typeof element2);
    console.log(typeof element3);
}

type("cacahuète",42,true);




//LOGIQUE

//Exo1

