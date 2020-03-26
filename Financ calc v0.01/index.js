let money = +prompt("Ваш бюджет на месяц?", ""),
    time = prompt("Введите дату в формате YYYY-MM-DD", "");

let appData = {
    budget: money,
    expenses: {},
    optionalExpenses: {},
    income: [],
    timeData: time,
    saving: false
};

//FOR
for(let i = 0; i < 2; i++){
    let a = prompt("Введите обязательныю статью расходов в этом месяце", ""),
        b = +prompt("Во сколько обойдется?", "");

    if( (typeof(a)) === "string" && (typeof(a)) != null && (typeof(b)) != null && a != "" && b != "" && a.length < 50){

        appData.expenses[a] = b;
    }else{
        console.log("error");
        i--;
    }

};

// WHILE
// let i = 0;
// while(i < 2){
//     let a = prompt("Введите обязательныю статью расходов в этом месяце", ""),
//         b = +prompt("Во сколько обойдется?", "");

//     if( (typeof(a)) === "string" && (typeof(a)) != null && (typeof(b)) != null && a != "" && b != "" && a.length < 50){
//         appData.expenses[a] = b;
//     }else{
//         console.log("error");
//         i--;
//     }
//     i++;
// }

//DO WHILE
// let i = 0;
// do{
//     let a = prompt("Введите обязательныю статью расходов в этом месяце", ""),
//         b = +prompt("Во сколько обойдется?", "");

//     if( (typeof(a)) === "string" && (typeof(a)) != null && (typeof(b)) != null && a != "" && b != "" && a.length < 50){

//         appData.expenses[a] = b;
//     }else{
//         console.log("error");
//         i--;
//     }
//     i++;
// }while(i < 2);

appData.moneyPerDay = appData.budget / 30;

alert("Бюджет: " + appData.moneyPerDay);

if(appData.moneyPerDay < 100){
    console.log("Minimal lavel");
}else if(appData.moneyPerDay > 100 && appData.moneyPerDay < 2000){
    console.log("Средний уровень");
}else if(appData.moneyPerDay > 2000){
    console.log("Hight lavel");
}else{
    console.log("error");
}