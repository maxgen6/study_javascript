'use strict';

const start = document.getElementById('start'),
    reset = document.getElementById('cancel'),
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
    rangePeriodTitle = document.querySelectorAll('.period'),
    blockInputValue = document.querySelectorAll('input'),
    resetClick = document.querySelectorAll('input');
const isNumber = function(n){
    return !isNaN(parseFloat(n)) && isFinite(n);
};

// const AppData = function(){
//     this.income = {};
//     this.incomeMonth = 0;
//     this.addIncome = [];
//     this.expenses = {};
//     this.addExpenses = [];
//     this.deposit = false;
//     this.percentDeposit = 0;
//     this.moneyDeposit = 0;
//     this.budget = 0;
//     this.budgetDay = 0;
//     this.budgetMonth = 0;
//     this.expensesMonth = 0;   
// };

class AppData{
    constructor(){
        this.income = {};
        this.incomeMonth = 0;
        this.addIncome = [];
        this.expenses = {};
        this.addExpenses = [];
        this.deposit = false;
        this.percentDeposit = 0;
        this.moneyDeposit = 0;
        this.budget = 0;
        this.budgetDay = 0;
        this.budgetMonth = 0;
        this.expensesMonth = 0;   
    }
}

AppData.prototype.start = function(){
    this.budget = +salaryAmount.value;        
    start.disabled = salaryAmount.value === '';
    this.getExpenses();
    this.getInfoDeposit();
    this.calcSavedMoney();
    this.getExpensesMonth();
    this.getAddExpenses();
    this.getAddIncome();
    this.rangePeriodTitle();
    this.getIncome();
    this.getBudget();
    this.calcPeriod();
    this.showResult();
};

AppData.prototype.touchButton = function (){
    start.disabled = false;
};

AppData.prototype.showResult = function(){
    budgetMonthValue.value = this.budgetMonth;
    budgetDayValue.value = this.budgetDay;
    expensesMonthValue.value = this.expensesMonth;
    
    additionalExpensesValue.value = this.addExpenses.join(', ');
    additionalIncomeValue.value = this.addIncome.join(', '); //appData
    targetMonthValue.value = Math.ceil(this.getTargetMonth());
    incomePeriodValue.value = this.calcPeriod();
            
    periodSelect.addEventListener('click', this.changePeriodAmount.bind(this));
};

AppData.prototype.changePeriodAmount = function(){    
    incomePeriodValue.value = this.calcPeriod();
};

AppData.prototype.addExpensesBlock = function(){
    const expensesItems = document.querySelectorAll('.expenses-items');
    // console.log(expensesItems.parentNode); //получили родителя
    const cloneExpensesItem = expensesItems[0].cloneNode(true);
    expensesPlus.before(cloneExpensesItem); //использовать before
    console.log(cloneExpensesItem);
    if(expensesItems.length === 2){
        expensesPlus.style.display = 'none';
    }
    cloneExpensesItem.querySelectorAll('input').forEach(function(item){
        item.value = '';
    }, this);
};
AppData.prototype.getExpenses = function(){
    expensesItems.forEach(function(item){
        const itemExpenses = item.querySelector('.expenses-title').value;
        const cashExpenses = item.querySelector('.expenses-amount').value;
        if(itemExpenses !== '' && cashExpenses !== ''){
            this.expenses[itemExpenses] = cashExpenses; //appData
        }
    }, this);
};
AppData.prototype.addIncomeBlock = function(){
    const incomeTitle = document.querySelectorAll('.income-items'); 
    const cloneIncomeTitle = incomeTitle[0].cloneNode(true);
    incomePlus.before(cloneIncomeTitle);
    
    if(incomeTitle.length === 2){
        incomePlus.style.display = 'none';
    }
    cloneIncomeTitle.querySelectorAll('input').forEach(function(item){
        item.value = '';
    }, this);
};

AppData.prototype.getIncome = function(){
    // if (confirm('Есть ли у вас дополнительный источник заработка?')){
    //     let itemIncome = prompt('Какой?', 'таксую');
    //     let cashIncome = prompt('Сколько в месяц зарабатываете на этом?', 10000);
    //     appData.income[itemIncome] = cashIncome;
    // }
    incomeTitle.forEach(function(item){
        const itemIncome = item.querySelector('.income-title').value;
        const cashIncome = item.querySelector('.income-amount').value;
        if(itemIncome !== '' && cashIncome !== ''){
            this.income[itemIncome] = cashIncome;
        }
    }, this);
    for (let key in this.income){
        this.incomeMonth += +this.income[key]; // appData
    }
};
AppData.prototype.rangePeriodTitle = function(item){
    const periodSelect = document.querySelector('.period-select');
    const periodAmount = document.querySelector('.period-amount');
    periodAmount.textContent = periodSelect.value; 
};
AppData.prototype.getAddExpenses = function(){
    let addExpenses = additionalExpensesItem.value.split(',');
    this.addExpenses = []; //appData
    addExpenses.forEach(function(item){
        
        item = item.trim();
        if(item !== ''){
            this.addExpenses.push(item); //appData
        }
    },this);
};

AppData.prototype.getAddIncome = function(){
    additionalIncomeItem.forEach(function(item){
        const itemValue = item.value.trim();
        if(itemValue !== ''){
            this.addIncome.push(itemValue); //appData
        }
    }, this);
};

AppData.prototype.getInfoDeposit = function(){
    if(this.deposit){
        do{
        this.percentDeposit = prompt('Какой годовой процент?', '10');
        } while(!isNumber(this.percentDeposit));
        do{
        this.moneyDeposit = prompt('какая сумма заложена?', 10000);
        } while(!isNumber(this.moneyDeposit));
    }
};

AppData.prototype.calcSavedMoney = function(){        
    return this.budgetMonth * this.period;
};

AppData.prototype.getTargetMonth = function (){
    return targetAmount.value / this.budgetMonth;
};

AppData.prototype.calcPeriod = function(){
    return this.budgetMonth * periodSelect.value;
};

AppData.prototype.getExpensesMonth = function (){
    for (let key in this.expenses){
        this.expensesMonth += +this.expenses[key];
        }
};

AppData.prototype.getBudget = function(){
    this.budgetMonth = this.budget + this.incomeMonth - this.expensesMonth; //appData
    this.budgetDay = Math.ceil(this.budgetMonth / 30);
};
AppData.prototype.getStatusIncome = function(){
if (this.budgetDay >= 1200){
    return ('У вас высокий уровень дохода!');
}  else if((1200 > this.budgetDay) && (this.budgetDay >= 600)){
    return ('У вас средний уровень дохода');
}  else if ((600 > this.budgetDay) && (this.budgetDay > 0)){
    return ('К сожалению у вас уровень дохода ниже среднего');
}  else {
    return ('Что-то пошло не так');
}
};
AppData.prototype.blockInput = function(){
    // console.log('blockInput: ', blockInputValue);
    // blockInput.disabled = true;
    blockInputValue.forEach(function(item){          
        item.disabled = true;
        periodSelect.disabled = false;

    }, this);
    start.style.display = 'none';
    reset.style.display = 'list-item';
};
AppData.prototype.reset = function(){
    
    // reset.style.display = 'list-item';
    resetClick.forEach(function(item){
        item.value = '';
        item.disabled = false;
    }, this);
    reset.style.display = 'none';
    start.style.display = 'list-item';
};

AppData.prototype.eventListener = function(){
    salaryAmount.addEventListener('input', this.touchButton);
    start.addEventListener('click', this.start.bind(this));
    start.addEventListener('click', this.blockInput);
    // start.addEventListener('click', appData.reset);    
    reset.addEventListener('click', this.reset);
    // appData.start();
    incomePlus.addEventListener('click', this.addIncomeBlock);
    expensesPlus.addEventListener('click', this.addExpensesBlock);
    periodSelect.addEventListener('input', this.rangePeriodTitle);
    this.getBudget();
    this.budgetMonth = this.getBudget(); 
}

const calcData = new AppData();
// const appData = new AppData();
// console.log(appData);
calcData.eventListener();




// appData.getBudget();
// appData.budgetMonth = appData.getBudget(); //appData


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






