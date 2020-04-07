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
    percentDeposit: 0,
    moneyDeposit: 0,
    mission: 20000,
    period: 12,
    budget: money,
    budgetDay: 0,
    budgetMonth: 0,
    expensesMonth: 0,
    asking: function(){
        let itemIncome;
        if(confirm('Есть ли у вас дополнительный заработок?')){    
            do{
            itemIncome = prompt('Какой у вас дополнительный заработок?', 'такси');
            } while(isNumber(itemIncome) || itemIncome == '' || itemIncome === null);  
                 
        }
            let cashIncome;   
            do {
            cashIncome = prompt('Сколько в месяц на этом зарабатываете?', 10000);
            } while(!isNumber(cashIncome));  
            appData.income[itemIncome] = cashIncome;  

        

        let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
            appData.addExpenses = addExpenses.split(','); 
            for(let i = 0; i < appData.addExpenses.length; i++){
            appData.addExpenses[i] = appData.addExpenses[i].charAt(0).toUpperCase() + appData.addExpenses[i].slice(1);
            // console.log(appData.addExpenses[i].toString(','));
            }
            // appData.addExpenses = appData.addExpenses.toUpperCase();
            console.log(appData.addExpenses.toString(', '));
            appData.deposit = confirm('Есть ли у вас депозит в банке?');
            let exp = [];
            let sum = 0;
            for (let i = 0; i < 2; i++){
                    do{
                    exp[i] = prompt('Введите обязательную статью расходов? ');
                    } while(isNumber(exp[i]) || exp[i] == '' || exp[i] == null);
                    
                let count;
                do {
                    count = prompt('Во сколько это обойдется?');
                } while(!isNumber(count));
                appData.expenses[exp[i]] = count; 
                
            }
            
            

    },
    getInfoDeposit: function(){
        if(appData.deposit){
            do{
            appData.percentDeposit = prompt('Какой годовой процент?', '10');
            } while(!isNumber(appData.percentDeposit));
            do{
            appData.moneyDeposit = prompt('какая сумма заложена?', 10000);
            } while(!isNumber(appData.moneyDeposit));
        }
    },
    calcSavedMoney: function(){
        return appData.budgetMonth * appData.period;
    }
    };

appData.asking();
appData.getInfoDeposit();
appData.calcSavedMoney();


 appData.getExpensesMonth = function (){
    for (let key in appData.expenses){
        appData.expensesMonth += +appData.expenses[key];
        }
};


appData.getExpensesMonth();
console.log('Расходы за месяц: ' + appData.expensesMonth);

 appData.getBudget = function(){
     appData.budgetMonth = money - appData.expensesMonth;
     appData.budgetDay = appData.budgetMonth / 30;
}
appData.getBudget();

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


// for (let key in appData){
//     console.log('Наша программа включает в себя данные : ' + key + ' ' + appData[key]);
// }



     