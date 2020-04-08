'use strict';
// let isNumber = function(n){
//     return !isNaN(parseFloat(n)) && isFinite(n);
// };

// let money;
// let start = function(){
//     do{
//         money = prompt('Ваш месячный доход?');
//     }
//     while(!isNumber(money));
// };
// start();

// let appData = {
//     income: {},
//     addIncome: [],
//     expenses: {},
//     addExpenses: [],
//     deposit: false,
//     percentDeposit: 0,
//     moneyDeposit: 0,
//     mission: 20000,
//     period: 12,
//     budget: money,
//     budgetDay: 0,
//     budgetMonth: 0,
//     expensesMonth: 0,
//     asking: function(){
//         let itemIncome;
//         if(confirm('Есть ли у вас дополнительный заработок?')){    
//             do{
//             itemIncome = prompt('Какой у вас дополнительный заработок?', 'такси');
//             } while(isNumber(itemIncome) || itemIncome == '' || itemIncome === null);  
                 
//         }
//             let cashIncome;   
//             do {
//             cashIncome = prompt('Сколько в месяц на этом зарабатываете?', 10000);
//             } while(!isNumber(cashIncome));  
//             appData.income[itemIncome] = cashIncome;  

        

//         let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
//             appData.addExpenses = addExpenses.split(','); 
//             for(let i = 0; i < appData.addExpenses.length; i++){
//             appData.addExpenses[i] = appData.addExpenses[i].charAt(0).toUpperCase() + appData.addExpenses[i].slice(1);
//             // console.log(appData.addExpenses[i].toString(','));
//             }
//             // appData.addExpenses = appData.addExpenses.toUpperCase();
//             console.log(appData.addExpenses.toString(', '));
//             appData.deposit = confirm('Есть ли у вас депозит в банке?');
//             let exp = [];
//             let sum = 0;
//             for (let i = 0; i < 2; i++){
//                     do{
//                     exp[i] = prompt('Введите обязательную статью расходов? ');
//                     } while(isNumber(exp[i]) || exp[i] == '' || exp[i] == null);
                    
//                 let count;
//                 do {
//                     count = prompt('Во сколько это обойдется?');
//                 } while(!isNumber(count));
//                 appData.expenses[exp[i]] = count; 
                
//             }
            
            

//     },
//     getInfoDeposit: function(){
//         if(appData.deposit){
//             do{
//             appData.percentDeposit = prompt('Какой годовой процент?', '10');
//             } while(!isNumber(appData.percentDeposit));
//             do{
//             appData.moneyDeposit = prompt('какая сумма заложена?', 10000);
//             } while(!isNumber(appData.moneyDeposit));
//         }
//     },
//     calcSavedMoney: function(){
//         return appData.budgetMonth * appData.period;
//     }
//     };

// appData.asking();
// appData.getInfoDeposit();
// appData.calcSavedMoney();


//  appData.getExpensesMonth = function (){
//     for (let key in appData.expenses){
//         appData.expensesMonth += +appData.expenses[key];
//         }
// };


// appData.getExpensesMonth();
// console.log('Расходы за месяц: ' + appData.expensesMonth);

//  appData.getBudget = function(){
//      appData.budgetMonth = money - appData.expensesMonth;
//      appData.budgetDay = appData.budgetMonth / 30;
// };
// appData.getBudget();

// appData.budgetMonth = appData.getBudget();
// appData.getTargetMonth = function (){
//     return appData.mission / appData.budgetMonth;
// };


// if(appData.getTargetMonth() > 0){
// console.log('Цель будет достигнута за: ' + Math.ceil(appData.getTargetMonth()) + ' месяцев');
// } else{
//     console.log('Цель не будет достигнута');
// }

// // appData.budgetDay = Math.floor(appData.budgetMonth / 30);
// //     if(appData.budgetDay <= 0){
// //         console.log('Без денег!');
// //     } else{
// //         console.log('Бюджет на день: ' +  appData.budgetDay);
// //     }
 

// appData.getStatusIncome = function(){
//     if (appData.budgetDay >= 1200){
//         return ('У вас высокий уровень дохода!');
//     }  else if((1200 > appData.budgetDay) && (appData.budgetDay >= 600)){
//         return ('У вас средний уровень дохода');
//     }  else if ((600 > appData.budgetDay) && (appData.budgetDay > 0)){
//         return ('К сожалению у вас уровень дохода ниже среднего');
//     }  else {
//         return ('Что-то пошло не так');
//     }

// };
// console.log(appData.getStatusIncome());


// for (let key in appData){
//     console.log('Наша программа включает в себя данные : ' + key + ' ' + appData[key]);
// }



const mathResult = document.getElementById('start');
console.log(mathResult);
const plus1 = document.getElementsByClassName('btn_plus income_add');
console.log(plus1);
const plus2 = document.getElementsByClassName('btn_plus expenses_add');
console.log(plus2);
const checkbox = document.querySelector('#deposit-check');
console.log(checkbox);
const additionalIncome = document.querySelectorAll('.additional_income-item');
console.log(additionalIncome);
const resultBudgetDay = document.querySelector('.result-budget_day');
console.log(resultBudgetDay);
const resultBudgetMonth = document.querySelector('.result-expenses_month');
console.log(resultBudgetMonth);
const additionalValue = document.querySelector('.result-additional_income');
console.log(additionalValue);
const additionalExpenses= document.querySelector('.result-additional_expenses');
console.log(additionalExpenses);
const incomePeriod = document.querySelector('.result-income_period');
console.log(incomePeriod);
const targenMonth = document.querySelector('.result-target_month');
console.log(targenMonth);
const budgetOfMonth = document.querySelector('.salary-amount');
console.log(budgetOfMonth);
const name = document.querySelector('.income-title');
console.log(name);
const mathSum = document.querySelector('.income-amount');
console.log(mathSum);
const nameOfAdditionalIncome = document.querySelector('.additional_income-item');
console.log(nameOfAdditionalIncome);
const expensesIncomeName = document.querySelector('.expenses-title');
console.log(expensesIncomeName);
const expensesAmount = document.querySelector('.expenses-amount');
console.log(expensesAmount);
const additionalExpensesItemName = document.querySelector('.additional_expenses-item');
console.log(additionalExpensesItemName);
const depositAmount = document.querySelector('.deposit-amount');
console.log(depositAmount);
const depositPercent = document.querySelector('.deposit-percent');
console.log(depositPercent);
const targetAmount = document.querySelector('.target-amount');
console.log(targetAmount);
const period = document.querySelector('.period-select');
console.log(period);


