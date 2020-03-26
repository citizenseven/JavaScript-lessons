function calc(a,b){
    return (a + b);
}
//let calc = (a,b) => a+b; //es6
console.log(calc); // выведет код функции
console.log(calc(4,9)); // выведет результат 

//функциональное выражение
let retVar = function(){
    let num = 50;
    return num;
}
let anotherNum = retVar();
console.log(anotherNum);

// let str = "test";
// console.log(str.length);
// console.log(str.toUpperCase());
// console.log(str.toLowerCase());

// let twelve = "12.2px";
// // console.log(Math.round(twelve)); //округляет до целого
// console.log(parseFloat(twelve));
// console.log(parseInt(twelve));
// console.log(String(twelve));
// console.log(Number(twelve));



// let num = 20;
// function showMess(txt){
//     console.log(txt);
//     console.log(num);
// }
// showMess("txt");


//Замыкание
// let c = 4;
// function addX(x){
//     return function(n){
//         return n + x;
//     }
// }
// const addThree = addX(3);
// let d = addThree(c);
// console.log(d);

// function creatCounter(){
//     let counter = 0;
//     const myFunc = function(){
//         counter = counter + 1;
//         return counter;
//     }
//     return myFunc;
// }
// const increment = creatCounter();
// const c1 = increment();
// const c2 = increment();
// const c3 = increment();
// const c4 = increment();
// console.log(c1,c2,c3,c4);

// let val = 7;
// function createAdder(){
//     function addNumber(a,b){
//         let ret = a + b;
//         return ret;
//     }
//     return addNumber;
// }
// let adder = createAdder();
// let sum = adder(val, 8);
// console.log(sum);

// let val1 = 2;
// function multiplyThis(n){
//     let ret = n * val1;
//     return ret;
// }
// let multiplied = multiplyThis(6);
// console.log(multiplied);

