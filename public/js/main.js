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
let classe = [];

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
console.log(autreClasse);




