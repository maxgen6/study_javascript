let money,income,addExpenses ,
deposit,mission,period, budgetDay , num;

    money = 1300;
    income = 'f600';
    addExpenses = 'TAXI, FOOD, CLOTHES, HOBBY, CINEMA';
    deposit = Boolean(200);
    mission = 2500;
    period = 12;


    console.log(typeof money);
    console.log(typeof income);
    console.log(typeof deposit);
    console.log('Период равен '+ period + ' месяцев.');
    console.log('Цель заработать:' + mission + ' рублей');

addExpenses = addExpenses.toLowerCase();
    console.log(addExpenses.split());

budgetDay = money / 30;
    console.log('Дневной бюджет: ' + budgetDay);



     