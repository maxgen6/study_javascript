'use strict';
let isNumber = function(n){
    return !isNaN(parseFloat(n)) && isFinite(n);
}


let money;
let start = function(){
    do{
        money = prompt('Ваш месячный доход?');
    }
    while(!isNumber(money));
}
start();

let appData = {
    income: {},
    addIncome: [],
    expenses: {},
    addExpenses: [],
    deposit: false,
    mission: 20000,
    period: 12,
    budget: money,
    budgetDay: 0,
    budgetMonth: 0,
    expensesMonth: 0,
    asking: function(){
        let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
            appData.addExpenses = addExpenses.toLowerCase().split(',');
            appData.deposit = confirm('Есть ли у вас депозит в банке?');
            let exp = [];
            let sum = 0;
            for (let i = 0; i < 2; i++){
                    exp[i] = prompt('Введите обязательную статью расходов? ');
                let count;
                do {
                    count = prompt('Во сколько это обойдется?');
                } while(!isNumber(count));
                appData.expenses[exp[i]] = count; 
                
            }
            console.log(appData.expenses);
            

    }
    };
//  let accumulatedMonth = 0;
console.log('Доходы за месяц: ' + money);
// console.log(appData);

appData.asking();


 appData.getExpensesMonth = function (){
    for (let key in appData.expenses){

        console.log(appData.expenses[key]);
        appData.expensesMonth += +appData.expenses[key];
        }
        console.log(appData.expensesMonth);

};
console.log(appData.expensesMonth);
// appData.getExpensesMonth = getExpensesMonth;


let expensesAmount = appData.getExpensesMonth();
console.log('Расходы за месяц: ' + expensesAmount);


 appData.getBudget = function(){
    return money - expensesAmount;
}
appData.getBudget = getBudget;
accumulatedMonth  = appData.getBudget();
console.log(accumulatedMonth);
function getTargetMonth(){
    return appData.mission / accumulatedMonth;
}
appData.getTargetMonth = getTargetMonth;

if(appData.getTargetMonth() > 0){
console.log('Цель будет достигнута за: ' + Math.ceil(appData.getTargetMonth()) + ' месяцев');
}else{
    console.log('Цель не будет достигнута');
}

appData.budgetDay = Math.floor(accumulatedMonth / 30);
    if(appData.budgetDay <= 0){
        console.log('Без денег!');
    } else{
        console.log('Бюджет на день: ' +  appData.budgetDay);
    }
 

let getStatusIncome = function(){
    if (appData.budgetDay >= 1200){
        return ('У вас высокий уровень дохода!');
    }  else if((1200 > appData.budgetDay) && (appData.budgetDay >= 600)){
        return ('У вас средний уровень дохода');
    }  else if ((600 > appData.budgetDay) && (appData.budgetDay > 0)){
        return ('К сожалению у вас уровень дохода ниже среднего');
    }  else {
        return ('Что-то пошло не так');
    }

}
appData.getStatusIncome = getStatusIncome;
console.log(appData.getStatusIncome());




     