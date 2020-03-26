'user strict';

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
            b = +prompt("Во сколько обойдется?", "180 000");

        if( (typeof(a)) === "string" && (typeof(a)) != null && (typeof(b)) != null && a != "" && b != "" && a.length < 50){
            console.log("Ok!");
            appData.expenses[a] = b;
        }else{
            console.log("error");
            i--;
        }
    }
}
chooseExpenses();

function chooseOptExpenses(){
    for(let i = 0; i < 3; i++){
        let c = prompt("Необязательные расходы?","");
        appData.optionalExpenses[i] = c;
        console.log(appData.optionalExpenses);
    }
}
chooseOptExpenses();

function detectDayBudget(){
    appData.moneyPerDay = (appData.budget / 30).toFixed();
    alert("Дневной бюджет: " + appData.moneyPerDay);
}
detectDayBudget();

function detectLevel(){
    if(appData.moneyPerDay < 100){
        console.log("Очень низкий доход");
    }else if(appData.moneyPerDay > 100 && appData.moneyPerDay < 2000){
        console.log("Средний уровень");
    }else if(appData.moneyPerDay > 2000){
        console.log("Высокий доход");
    }else{
        console.log("error");
    }
}
detectLevel();

function checkSavings(){
    if(appData.saving == true){
        let save = +prompt("Сумма накоплений?", ""),
            percent = +prompt("какой процент?","");

        appData.monthIncome = save / 100 / 12 * percent;
        alert("Доход в месяц с депозита: " + appData.monthIncome);
    }
}
checkSavings();