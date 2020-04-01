'use strict';

let isNumber = function(n){
    return (parseFloat(n)) && isFinite(n);
}


let budgetDay,
    money,
    income = 'freelance',
    mission = 2500,
    period = 12,
    addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую'),
    deposit = confirm('Есть ли у вас депозит в банке?'),   
    accumulatedMonth = 0;


console.log(addExpenses.split(','));

let start = function(){
    
    do{
        money = prompt('Ваш месячный доход?');
    }
    while(!isNumber(money))
}
start();
console.log('Доходы за месяц: ' + money);

let showTypeOf = function(data){
    console.log(typeof(data));
}

showTypeOf(money);  
showTypeOf(income);
showTypeOf(deposit);

let expenses = [];

let getExpensesMonth = function (){
    let sum = 0;

    for (let i = 0; i < 2; i++){

    expenses[i] = prompt('Введите обязательную статью расходов? ');
    if(!isNumber(sum[i])){
    sum += +prompt('Во сколько это обойдется? ');
    }
    
    }
    console.log(expenses);
    return sum;
 
};

let expensesAmount = getExpensesMonth();

console.log('Расходы за месяц: ' + expensesAmount);


function getAccumulatedMonth(){
    return money - expensesAmount;
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
    }  else if ((600 > budgetDay) && (budgetDay > 0)){
        return ('К сожалению у вас уровень дохода ниже среднего');
    }  else {
        return ('Цель не будет достигнута');
    }

}
console.log(getStatusIncome());



     