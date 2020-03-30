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
        price: 300,
        oldPrice: 500
    },
    {
        title: "case two",
        price: "",
        oldPrice: 100
    },
    {
        title: "case three",
        price: 17839,
        oldPrice: 99
    }
];
// let op = cases[0].newPrice();
// console.log(op);

// for(let i = 0; i < cases.length; i++){
//     console.log(i);
//     console.log(cases[i]);
//     console.log(cases[i].price);
// }

for(let key in cases){
    // console.log(key + " " + cases[key].price + " " + cases[key].oldPrice);

    let newPrice = price => {
        if(cases[key].price === ""){
            return cases[key].oldPrice;
        }else{
            return cases[key].price;
        }
    }

    console.log(cases[key].title + " " + newPrice());
}

// console.log(cases[1]["title"]);
// for(let key in options){
//     console.log(key + " " + options[key]);
// }
// console.log(Object.keys(options.colors).length);