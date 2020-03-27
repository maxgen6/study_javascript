let  money = 1300,
    income = 'f600',
    addExpenses = 'TAXI, FOOD, CLOTHES, HOBBY, CINEMA',
    deposit = true,
    mission = 2500,
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

   
num = 266219;
let i;
let multiply = 1;
let multiply_2;

num = num.toString();

for (i = 0; i<num.length; i++){
    multiply *= num[i];
    console.log(multiply);
}
multiply_2 = multiply ** 3; 
console.log('После возведения в степень: ' + multiply_2 );
multiply_2 = multiply_2.toString();
console.log('Первые 2 цифры: ' + multiply_2.substr( 0,2 ));






      



     