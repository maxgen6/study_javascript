'use strict';


let  money, expenses1, expenses2, amount1, amount2, budgetMonth, aim,
    budgetDay,
    income = 'f600',
    addExpenses,
    deposit,
    mission = 2500,
    period = 12;

    console.log('Период равен '+ period + ' месяцев.');
    console.log('Цель заработать:' + mission + ' рублей');

money = prompt('Ваш месячный доход?');
addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
deposit = confirm('Есть ли у вас депозит в банке?');
expenses1 = prompt('Введите обязательную статью расходов? ');   
expenses2 = prompt('Введите обязательную статью расходов? ');    
amount1 = prompt('Во сколько это обойдется? ');   
amount2 = prompt('Во сколько это обойдется? ');

console.log(money);
console.log(addExpenses.split(','));
console.log(deposit);

budgetMonth = parseInt(money) - (parseInt(amount1) + parseInt(amount2));
console.log(budgetMonth);

aim = Math.ceil(mission / budgetMonth);
console.log('Цель будет достигнута примерно через: ' + aim + ' месяцев.');

budgetDay = Math.floor(budgetMonth / 30);
    if(budgetDay <= 0){
        console.log('Без денег!');
    } else{
        console.log('Бюджет на день: ' +  budgetDay);
    }

if (budgetDay > 1200){
    console.log('У вас высокий уровень дохода!');
}  else if(1200 > budgetDay > 600){
    console.log('У вас средний уровень дохода');
}  else if (600 > budgetDay > 0){
    console.log('К сожалению у вас уровень дохода ниже среднего');
}  else {
    console.log('Что-то пошло не так');
}





      



     