let money,time;
function start(){
    money = +prompt("Ваш бюджет на месяц?", "");
    time = prompt("Введите дату в формате YYYY-MM-DD", "");

    while(isNaN(money) || money == "" || money == null){
        money = +prompt("Ваш бюджет на месяц?", "");
    }
}
start();

let appData = {
    budget: money,
    expenses: {},
    optionalExpenses: {},
    income: [],
    timeData: time,
    saving: true
};

function chooseExpenses(){
    for(let i = 0; i < 2; i++){
        let a = prompt("Что хотите купить в этом месяце?", "Машину"),
            b = prompt("Во сколько обойдется?", "180 000");

        if( (typeof(a)) === "string" && (typeof(a)) != null && (typeof(b)) != null && a != "" && b != "" && a.length < 50){
            console.log("Ok!");
            appData.expenses[a] = b;
        }else{
            console.log("error");
            i = i - 1;
        }
    }
}
chooseExpenses();

appData.moneyPerDay = (appData.budget / 30).toFixed();

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

function checkSavings(){
    if(appData.saving == true){
        let save = +prompt("Сумма накоплений?", ""),
            percent = +prompt("какой процент?","");

        appData.monthIncome = save / 100 / 12 * percent;
        alert("Доход в месяц с депозита: " + appData.monthIncome);
    }
}
checkSavings();