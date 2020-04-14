'use strict';

let start = document.getElementById('start'),
    salaryAmount = document.querySelector('.salary-amount'),
    incomePlus = document.getElementsByClassName('btn_plus income_add')[0],
    expensesPlus = document.getElementsByClassName('btn_plus expenses_add')[0],
    expensesItems = document.querySelectorAll('.expenses-items'),
    additionalIncomeItem = document.querySelectorAll('.additional_income-item'),
    depositCheck = document.querySelector('#deposit-check'),
    budgetDayValue = document.getElementsByClassName('budget_day-value')[0],
    budgetMonthValue = document.getElementsByClassName('budget_month-value')[0],
    expensesMonthValue = document.getElementsByClassName('expenses_month-value')[0],
    additionalExpensesValue = document.getElementsByClassName('additional_expenses-value')[0],
    additionalExpensesItem = document.querySelector('.additional_expenses-item'),
    accumulatedMonthValue = document.getElementsByClassName('accumulated_month-value')[0],
    additionalIncomeValue = document.getElementsByClassName('additional_income-value')[0],
    incomePeriodValue = document.getElementsByClassName('income_period-value')[0],
    targetMonthValue = document.getElementsByClassName('target_month-value')[0],
    incomeTitle = document.querySelectorAll('.income-items'),
    // incomeAmount = document.querySelector('.income-amount'),
    expensesTitle = document.querySelector('expenses-title'),
    additionalExpenses = document.querySelector('.additional-expenses'),
    periodSelect = document.querySelector('.period-select'),
    targetAmount = document.querySelector('.target-amount'),
    incomeItem = document.querySelectorAll('.income-items'),
    rangePeriodTitle = document.querySelectorAll('.period');
   






let isNumber = function(n){
    return !isNaN(parseFloat(n)) && isFinite(n);
};


let appData = {
    income: {},
    incomeMonth: 0,
    addIncome: [],
    expenses: {},
    addExpenses: [],
    deposit: false,
    percentDeposit: 0,
    moneyDeposit: 0,
    budget: 0,
    budgetDay: 0,
    budgetMonth: 0,
    expensesMonth: 0,
    start: function(){
        if(salaryAmount.value === ''){
            document.getElementById('start').disabled = true;
            // alert('Ошибка заполнения!');
            return;
        }
        appData.budget = +salaryAmount.value;        
        console.log(salaryAmount.value);

        appData.getExpenses();
       
        appData.getInfoDeposit();
        appData.calcSavedMoney();
        appData.getExpensesMonth();
        appData.getAddExpenses();
        appData.getAddIncome();
        appData.rangePeriodTitle();
        appData.getIncome();
        appData.getBudget();
        appData.calcPeriod();

        appData.showResult();
    },
    showResult: function(){
        budgetMonthValue.value = appData.budgetMonth;
        budgetDayValue.value = appData.budgetDay;
        expensesMonthValue.value = appData.expensesMonth;
        
        additionalExpensesValue.value = appData.addExpenses.join(', ');
        additionalIncomeValue.value = appData.addIncome.join(', ');
        targetMonthValue.value = Math.ceil(appData.getTargetMonth());
        incomePeriodValue.value = appData.calcPeriod();
        
                
        periodSelect.addEventListener('click', appData.changePeriodAmount);

    },
    changePeriodAmount: function(){
        incomePeriodValue.value = appData.calcPeriod();
    },
    addExpensesBlock: function(){
        let expensesItems = document.querySelectorAll('.expenses-items');
        // console.log(expensesItems.parentNode); //получили родителя
        let cloneExpensesItem = expensesItems[0].cloneNode(true);
        expensesItems[0].parentNode.insertBefore(cloneExpensesItem, expensesPlus); //использовать before
        
        if(expensesItems.length === 2){
            expensesPlus.style.display = 'none';
        }
        cloneExpensesItem.querySelectorAll('input').forEach(function(item){
            item.value = '';
        });

    },
    getExpenses: function(){
        expensesItems.forEach(function(item){
            let itemExpenses = item.querySelector('.expenses-title').value;
            let cashExpenses = item.querySelector('.expenses-amount').value;
            if(itemExpenses !== '' && cashExpenses !== ''){
                appData.expenses[itemExpenses] = cashExpenses;
            }
        });
    },
    addIncomeBlock:function(){
        let incomeTitle = document.querySelectorAll('.income-items'); 
        let cloneIncomeTitle = incomeTitle[0].cloneNode(true);
        incomeTitle[0].parentNode.insertBefore(cloneIncomeTitle, incomePlus);
        
        if(incomeTitle.length === 2){
            incomePlus.style.display = 'none';
        }
    },
    getIncome:function(){
        // if (confirm('Есть ли у вас дополнительный источник заработка?')){
        //     let itemIncome = prompt('Какой?', 'таксую');
        //     let cashIncome = prompt('Сколько в месяц зарабатываете на этом?', 10000);
        //     appData.income[itemIncome] = cashIncome;
        // }
        incomeTitle.forEach(function(item){
            let itemIncome = item.querySelector('.income-title').value;
            let cashIncome = item.querySelector('.income-amount').value;
            if(itemIncome !== '' && cashIncome !== ''){
                appData.income[itemIncome] = cashIncome;
            }
        });
        for (let key in appData.income){
            appData.incomeMonth += +appData.income[key];
        }
    },
    rangePeriodTitle: function(item){
        periodSelect = document.querySelector('.period-select');
        let periodAmount = document.querySelector('.period-amount');
        periodAmount.textContent = periodSelect.value; 
         console.log(periodSelect.value);
        },
    getAddExpenses: function(){
        // addExpenses.textContent = '';
        // let addExpenses;
        // additionalExpensesValue.textContent = '';
        // additionalExpensesValue.value = '';
       
        let addExpenses = additionalExpensesItem.value.split(',');
        appData.addExpenses = [];
        addExpenses.forEach(function(item){
            
            item = item.trim();
            if(item !== ''){
                appData.addExpenses.push(item);
            }
        });
    },
    getAddIncome: function(){
        additionalIncomeItem.forEach(function(item){
            let itemValue = item.value.trim();
            if(itemValue !== ''){
                appData.addIncome.push(itemValue);
            }
        });
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
    },
    getTargetMonth: function (){
        return targetAmount.value / appData.budgetMonth;
    },
    calcPeriod: function(){

        return appData.budgetMonth * periodSelect.value;
    },

    getExpensesMonth: function (){
        for (let key in appData.expenses){
            appData.expensesMonth += +appData.expenses[key];
            }
    },
    getBudget: function(){
        appData.budgetMonth = appData.budget + appData.incomeMonth - appData.expensesMonth;
        appData.budgetDay = Math.ceil(appData.budgetMonth / 30);
   },
   getStatusIncome: function(){
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
   
    };

start.addEventListener('click', appData.start);    
// appData.start();
incomePlus.addEventListener('click', appData.addIncomeBlock);
expensesPlus.addEventListener('click', appData.addExpensesBlock);
periodSelect.addEventListener('input', appData.rangePeriodTitle);


// appData.getExpensesMonth();

appData.getBudget();
appData.budgetMonth = appData.getBudget();



// if(appData.getTargetMonth() > 0){
// console.log('Цель будет достигнута за: ' + Math.ceil(appData.getTargetMonth()) + ' месяцев');
// } else{
//     console.log('Цель не будет достигнута');
// }

// appData.budgetDay = Math.floor(appData.budgetMonth / 30);
//     if(appData.budgetDay <= 0){
//         console.log('Без денег!');
//     } else{
//         console.log('Бюджет на день: ' +  appData.budgetDay);
//     }


// for (let key in appData){
//     console.log('Наша программа включает в себя данные : ' + key + ' ' + appData[key]);
// }






