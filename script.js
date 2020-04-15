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
     
        // alert('Ошибка заполнения!');
        // if(salaryAmount.value !== ''){
        //     document.getElementById('start').disabled = false;
        // };   
        
        appData.budget = +salaryAmount.value;        
        start.disabled = salaryAmount.value === '';

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
    touchButton: function (){
        start.disabled = false;

    },
    showResult: function(){
        budgetMonthValue.value = this.budgetMonth;
        budgetDayValue.value = this.budgetDay;
        expensesMonthValue.value = this.expensesMonth;
        
        additionalExpensesValue.value = this.addExpenses.join(', ');
        additionalIncomeValue.value = this.addIncome.join(', '); //appData
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
                appData.expenses[itemExpenses] = cashExpenses; //appData
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
            this.incomeMonth += +appData.income[key]; // appData
        }
    },
    rangePeriodTitle: function(item){
        periodSelect = document.querySelector('.period-select');
        let periodAmount = document.querySelector('.period-amount');
        periodAmount.textContent = periodSelect.value; 
        },
    getAddExpenses: function(){
        // addExpenses.textContent = '';
        // let addExpenses;
        // additionalExpensesValue.textContent = '';
        // additionalExpensesValue.value = '';
       
        let addExpenses = additionalExpensesItem.value.split(',');
        appData.addExpenses = []; //appData
        addExpenses.forEach(function(item){
            
            item = item.trim();
            if(item !== ''){
                appData.addExpenses.push(item); //appData
            }
        });
    },
    getAddIncome: function(){
        additionalIncomeItem.forEach(function(item){
            let itemValue = item.value.trim();
            if(itemValue !== ''){
                appData.addIncome.push(itemValue); //appData
            }
        });
    },
    getInfoDeposit: function(){
        if(this.deposit){
            do{
            this.percentDeposit = prompt('Какой годовой процент?', '10');
            } while(!isNumber(this.percentDeposit));
            do{
            this.moneyDeposit = prompt('какая сумма заложена?', 10000);
            } while(!isNumber(this.moneyDeposit));
        }
    },
    calcSavedMoney: function(){        
        return this.budgetMonth * appData.period;
    },
    getTargetMonth: function (){
        return targetAmount.value / this.budgetMonth;
    },
    calcPeriod: function(){

        return this.budgetMonth * periodSelect.value;
    },

    getExpensesMonth: function (){
        for (let key in this.expenses){
            this.expensesMonth += +this.expenses[key];
            }
    },
    getBudget: function(){
        this.budgetMonth = this.budget + this.incomeMonth - this.expensesMonth; //appData
        this.budgetDay = Math.ceil(this.budgetMonth / 30);
   },
   getStatusIncome: function(){
    if (this.budgetDay >= 1200){
        return ('У вас высокий уровень дохода!');
    }  else if((1200 > this.budgetDay) && (this.budgetDay >= 600)){
        return ('У вас средний уровень дохода');
    }  else if ((600 > this.budgetDay) && (this.budgetDay > 0)){
        return ('К сожалению у вас уровень дохода ниже среднего');
    }  else {
        return ('Что-то пошло не так');
    }

    }
   
    };

salaryAmount.addEventListener('input', appData.touchButton);
start.addEventListener('click', appData.start);    
// appData.start();
incomePlus.addEventListener('click', appData.addIncomeBlock);
expensesPlus.addEventListener('click', appData.addExpensesBlock);
periodSelect.addEventListener('input', appData.rangePeriodTitle);



appData.getBudget();
appData.budgetMonth = appData.getBudget(); //appData

setTimeout(appData.start, 100);

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






