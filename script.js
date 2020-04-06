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
            
            

    }
    };
//  let accumulatedMonth = 0;
// console.log(appData);

appData.asking();


 appData.getExpensesMonth = function (){
    for (let key in appData.expenses){
        appData.expensesMonth += +appData.expenses[key];
        }
};
// appData.getExpensesMonth = getExpensesMonth;


appData.getExpensesMonth();
console.log('Расходы за месяц: ' + appData.expensesMonth);
// console.log(typeof appData.expensesMonth);

 appData.getBudget = function(){
    return money - appData.expensesMonth;
}

appData.budgetMonth = appData.getBudget();
appData.getTargetMonth = function (){
    return appData.mission / appData.budgetMonth;
}


if(appData.getTargetMonth() > 0){
console.log('Цель будет достигнута за: ' + Math.ceil(appData.getTargetMonth()) + ' месяцев');
} else{
    console.log('Цель не будет достигнута');
}

// appData.budgetDay = Math.floor(appData.budgetMonth / 30);
//     if(appData.budgetDay <= 0){
//         console.log('Без денег!');
//     } else{
//         console.log('Бюджет на день: ' +  appData.budgetDay);
//     }
 

appData.getStatusIncome = function(){
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
console.log(appData.getStatusIncome());




     