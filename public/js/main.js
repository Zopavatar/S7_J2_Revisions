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



