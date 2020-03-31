'use strict';


let aim,
    budgetDay,
    income = 'freelance',
    mission = 2500,
    period = 12,
    money = prompt('Ваш месячный доход?'),
    addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую'),
    deposit = confirm('Есть ли у вас депозит в банке?'),
    expenses1 = prompt('Введите обязательную статью расходов? '),   
    expenses2 = prompt('Введите обязательную статью расходов? '),    
    amount1 = prompt('Во сколько это обойдется? '),   
    amount2 = prompt('Во сколько это обойдется? '),
    accumulatedMonth = 0;


console.log(addExpenses.split(','));




let showTypeOf = function(data){
    console.log(typeof(data));
}

showTypeOf(money);  
showTypeOf(income);
showTypeOf(deposit);


function getExpensesMonth(){
    return parseInt(amount1) + parseInt(amount2);
}
console.log(getExpensesMonth());

function getAccumulatedMonth(){
    return parseInt(money) - (parseInt(amount1) + parseInt(amount2));
}
accumulatedMonth  = getAccumulatedMonth();

function getTargetMonth(){
    return mission / accumulatedMonth;
}
console.log('Цель будет достигнута за: ' + Math.ceil(getTargetMonth()) + ' месяцев');

budgetDay = Math.floor(accumulatedMonth / 30);
    if(budgetDay <= 0){
        console.log('Без денег!');
    } else{
        console.log('Бюджет на день: ' +  budgetDay);
    }

let getStatusIncome = function(){
    if (budgetDay >= 1200){
        return ('У вас высокий уровень дохода!');
    }  else if((1200 > budgetDay) && (budgetDay >= 600)){
        return ('У вас средний уровень дохода');
    }  else if ((600 > budgetDay)&& (budgetDay > 0)){
        return ('К сожалению у вас уровень дохода ниже среднего');
    }  else {
        return ('Что-то пошло не так');
    }

}
console.log(getStatusIncome());



     