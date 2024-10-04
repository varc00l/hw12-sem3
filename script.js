let user = {
    name: 'John',
    age: 30,
    hobby: 'reading',
    premium: true,
  };
  
  user.mood = 'happy';
  
  user.hobby = 'skydiving';
  
  user.premium = false;
  
  for (let key of Object.keys(user)) {
    console.log(`${key}: ${user[key]}`);
}

function countProps(obj) {
    return Object.keys(obj).length;
}
console.log(countProps({ name: 'John', age: 30, hobby: 'reading' })); 

function findBestEmployee(employees) {
    let maxTasks = 0;
    let bestEmployee = '';
  
    for (const employee in employees) {
      if (employees[employee] > maxTasks) {
        maxTasks = employees[employee];
        bestEmployee = employee;
      }
    }
  
    return bestEmployee;
}
  
const employees = {
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
};
  
console.log(findBestEmployee(employees));
  
function countTotalSalary(employees) {
    let totalSalary = 0;
    for (const salary of Object.values(employees)) {
      totalSalary += salary;
    }
    return totalSalary;
}
  
  const salaries = {
    john: 1000,
    ann: 1500,
    david: 2500,
};
  
console.log(countTotalSalary(salaries)); 

function getAllPropValues(arr, prop) {
    const values = [];
  
    for (const obj of arr) {
      if (obj.hasOwnProperty(prop)) {
        values.push(obj[prop]);
      }
    }
  
    return values;
}
  

const products = [
    { name: 'Laptop', price: 1000, quantity: 4 },
    { name: 'Phone', price: 500, quantity: 10 },
    { name: 'Tablet', price: 750, quantity: 6 },
];
  
console.log(getAllPropValues(products, 'name'));
console.log(getAllPropValues(products, 'quantity'));
  
function calculateTotalPrice(allProducts, productName) {
    for (const product of allProducts) {
      if (product.name === productName) {
        return product.price * product.quantity;
      }
    }
    return 0;
}
  
const productsList = [
    { name: 'Laptop', price: 1000, quantity: 4 },
    { name: 'Phone', price: 500, quantity: 10 },
    { name: 'Tablet', price: 750, quantity: 6 },
];
  
console.log(calculateTotalPrice(productsList, 'Laptop')); 
console.log(calculateTotalPrice(productsList, 'Phone'));

const account = {
    balance: 0,
    transactions: [],
  
    deposit(amount) {
      this.balance += amount;
      this.transactions.push({ type: 'deposit', amount });
      console.log(`Депозит: ${amount}. Баланс: ${this.balance}`);
    },

    withdraw(amount) {
      if (this.balance >= amount) {
        this.balance -= amount;
        this.transactions.push({ type: 'withdraw', amount });
        console.log(`Знято: ${amount}. Баланс: ${this.balance}`);
      } else {
        console.log('Недостатньо коштів на рахунку');
      }
    },
  
    getTransactionHistory() {
      return this.transactions;
    },
  
    getBalance() {
      return this.balance;
    }
};
  

account.deposit(1000); 
account.withdraw(500); 
account.withdraw(600); 
console.log(account.getTransactionHistory()); 
  
  
  