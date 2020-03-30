'use strict';


let  money,
    income = 'f600',
    addExpenses,
    deposit,
    mission = 2500,
    period = 12;


    console.log(typeof money);
    console.log(typeof income);
    console.log(typeof deposit);
    console.log('Период равен '+ period + ' месяцев.');
    console.log('Цель заработать:' + mission + ' рублей');



money = prompt('Ваш месячный доход?');
    console.log(money);

addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
    console.log(addExpenses.split());

deposit = confirm('Есть ли у вас депозит в банке?');
    console.log(deposit);

let expenses1 = prompt('Введите обязательную статью расходов? ');
    
let expenses2 = prompt('Введите обязательную статью расходов? ');
    
let amount1 = prompt('Во сколько это обойдется? ');
    
let amount2 = prompt('Во сколько это обойдется? ');
    

let budgetMonth = parseInt(money) - (parseInt(amount1) + parseInt(amount2));
    console.log(budgetMonth);

let aim = Math.ceil(mission / budgetMonth);
    console.log('Цель будет достигнута примерно через: ' + aim + ' месяцев.');

let budgetDay = Math.floor(budgetMonth / 30);
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





      



     