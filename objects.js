'user strict';

// let options = {
//     width: 1024,
//     height: 1024,
//     name: "screen"
// };

// console.log(options.name);
// options.bool = false;
// console.log(options);
// options.colors = {
//     border: "black",
//     bg: "red"
// };
// console.log(options);
// console.log(options.colors.border);

// delete options.bool;
// console.log(options);

let cases = [
    {
        title: "case one",
        price: 300
    },
    {
        title: "case Two",
        price: 500
    }
];

for(let i = 0; i < cases.length; i++){
    console.log(i + " " + cases[i].price + " " + cases[i].title);
}
// for(let key in cases){
//     console.log(key + " " + cases[key].price + " " + cases[key].title);
// }
// console.log(cases[1]["title"]);

// for(let key in options){
//     console.log(key + " " + options[key]);
// }
// console.log(Object.keys(options.colors).length);