// let soldier = {
//     health: 400,
//     armor: 100
// }

// let john = {
//     health: 100
// }

// john.__proto__ = soldier;

// console.log(john);
// console.log(john.armor);


let car = {
    wheels: 4,
    wheelsSize: 15,
    doors: 4,
    places: 4,
    trunkLitrs: "400 litrov",
    horses: "120",
    maxFuel: "60 litrov",
    color: "white"
}

let jetta = {
    color: "blue",
    horses: "180",
    wheelsSize: 18,
    places: 5
}

jetta.__proto__ = car;
// console.log(jetta);
// console.log(jetta.places);

for(let key in jetta){
    console.log(key + " " + jetta[key]);
}