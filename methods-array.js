// let arr2 = [1,2,3,4,5,10, "pups"];
// var arr_res = ["friend",6,78,9];
//have is 3 in arr2
    // if( 3 in arr2){
    //     console.log(true);
    // }else{
    //     console.log(false);
    // }

// console.log(arr2.join("_")); склеивает свойства массива
// console.log(arr2.reverse());

// console.log(arr2.sort());
// console.log(arr2.sort(function(a,b){
//     // return -1;
//     // return a-b;
//     return b-a;
// }));

//слияние двух массивов
// var arr_all = arr2.concat(arr_res);
// console.log(arr_all);

//возвращает фрагмент массива, Не включая последний
// console.log(arr2.slice(0,3));//1,2,3 (4) имеет индекс - 3, не выводит
//console.log(arr2.slice(-3));//выводит фрагмент массива с индекса 3 включительно: 4,5,10

//console.log(arr2.splice(2,3));//показывает какие элементы были удаленны
// arr2.splice(2,2,);//удаляет с позиции 2, 2 элемента 3 и 4
// arr2.splice(2,2,"hello(3)","friend(4)");//добавляем на место удаленных элементов
// arr2.splice(5,0,"Hello","friend");//добавляет новые элементы с индекса 5
// arr2.splice(-5,0,"Hello","friend");//отсчитывается с конца массива,


// arr2.push("end");//добавляет в конец массива
// arr2.pop();//удаляет последний элемент массива
// arr2.unshift("end");//добавляет в начала массива
// arr2.shift();//удаляет первый элемент массива


// arr2.forEach(function(item,key){
//     console.log("Индекс " + key + ": " + item);
// });

// возвращает новый массив
// переберает массив arr2 умножает значения на себя же
// получений ответ записывает в виде нового массива newArr
// let newArr = arr2.map(function(x){
//     return x*x;
// });
// console.log(newArr);

//создает новый масcив и входят только те элементы которые true
// var res2 = arr2.filter(function(x,i,a){
//     return x == 5;
// });

//получаем идексы массива
// for(let key in arr2){
//     console.log(key);
// }

//получить значаение массива
// for(let key of arr2){
//     console.log(key);
// }


// let ans = prompt("", ""),
//     arrAns = [];

// arrAns = ans.split(",");
// console.log(arrAns);

// let arrJ = ["das","asda","wfxc"],
//     i = arrJ.join(""); //join склеивает все в одну строку
// console.log(arrJ);
// console.log(i);

let num = [1,2,19,4,3],
    i = num.sort(compareNum);
function compareNum(a,b){
    return a - b;
}
console.log(num);
