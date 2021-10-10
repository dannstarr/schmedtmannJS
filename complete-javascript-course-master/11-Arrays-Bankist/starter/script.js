'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');
///////////////
//Bankist

const displayMovements = function(movements) {
  containerMovements.innerHTML = '';
  movements.forEach(function(mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal'

    const html = `
    <div class="movements__row">
      <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
      <div class="movements__value">${mov}</div>
    </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html)

  })
}


const calcDisplayBalance = function(acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0)
  labelBalance.textContent = `${acc.balance} EUR`
};

const calcDisplaySummary = function(acc) {
  const incomes = acc.movements
  .filter(mov => mov > 0)
  .reduce((acc, mov) => acc + mov, 0);
labelSumIn.textContent = `€${incomes}`

const out = acc.movements
.filter(mov => mov < 0)
.reduce((acc, mov) => acc + mov, 0)
labelSumOut.textContent = `€${Math.abs(out)}`

const interest = acc.movements
.filter(mov => mov > 0)
.map(deposit => (deposit * acc.interestRate) / 100)
.filter((int, i, arr) => {
  return int >= 1;
})
.reduce((acc, int) => acc + int, 0);
labelSumInterest.textContent = `${interest}€`;

};


const createUsernames = function(accs) {
  accs.forEach(function(acc) {
  acc.username = acc.owner
  .toLowerCase()
  .split(' ')
  .map(name => name[0])
  .join('');
});
};
createUsernames(accounts);

const updateUI = function(acc) {
  // Display movements
  displayMovements(acc.movements)

  // Display balance
  calcDisplayBalance(acc)

  // Display summary
  calcDisplaySummary(acc)
}

// EVENT HANDLERS //

let currentAccount;

btnLogin.addEventListener('click', function(e) {
  e.preventDefault()
  
 currentAccount = accounts.find(account => account.username === inputLoginUsername.value)

 if(currentAccount?.pin === Number(inputLoginPin.value)) {
   // Display UI and welcome message
   labelWelcome.textContent = `Welcome back ${currentAccount.owner.split(' ')[0]}`;
   containerApp.style.opacity = 100;

   // Clear input fields
   inputLoginUsername.value = inputLoginPin.value = '';
   inputLoginPin.blur();

   updateUI(currentAccount);

 }

});

//////////**** -- Transfer Money ---****///////////

btnTransfer.addEventListener('click', function(e) {
  e.preventDefault() // Prevent the page reload when clicked (default form behaviour)
  const amount = Number(inputTransferAmount.value)
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  ); 
    inputTransferAmount.value = inputTransferTo.value = '';

  if(
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount && 
    receiverAcc?.username !== currentAccount.username
    ) {

      currentAccount.movements.push(-amount);
      receiverAcc.movements.push(amount);

      updateUI(currentAccount);
    }
});

///--*** Close Account -- ***////

btnClose.addEventListener('click', function(e) {
  e.preventDefault();

  if(inputCloseUsername.value === currentAccount.username &&
     Number(inputClosePin.value) === currentAccount.pin) {
    
      const accountToDelIndex = accounts.findIndex(
      acc => acc.username === inputCloseUsername.value
    )
    console.log(accountToDelIndex)


// Delete the user account
    const deletedItems = accounts.splice(accountToDelIndex, 1)
        console.log(deletedItems)
// Hide the UI

    containerApp.style.opacity = 0;    
    
  }

  
  
})








/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES


// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// /////////////////////////////////////////////////
// //// ---- Simple Array methods --- //////
// let arr = ['a', 'b', 'c', 'd', 'e']
// let arrSlice = arr.slice(2);
// console.log(arr)
// console.log(arrSlice)

// ///// ---- Looping Arrays: forEach ---- ////
// //// - This is a for of loop

// //to access the index
// // for (const [i, movement] of movements.entries())
// for (const movement of movements) {
//   if (movement > 0) {
//     console.log(`You deposited ${movement}`);
//   } else {
//     console.log(`You withdrew ${Math.abs(movement)}`);
//   }
// }
// console.log(`------FOREACH-----`)
// // This does the same thing - but is a forEach method

// movements.forEach(function(movement, i) {
//   if (movement > 0) {
//     console.log(`Movement ${i + 1}: You deposited ${movement}`)
//   } else {
//     console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`)
//   }
// })

// - forEach with Maps and Sets -- //

//map
// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// currencies.forEach(function(value, key, map) {
//   console.log(`${key}: ${value}:`)
// })
// //set

// const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR', 'GBP']);
// console.log(currenciesUnique);
// currenciesUnique.forEach(function (value, key, map) {
//   console.log(`${key}: ${value}`)
// })
/////////////////////////////////////////////////
//--** MAPS **-- //
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// const eurToUsd = 1.1

// const movementsToUsd = movements.map(function(mov) {
//   return mov * eurToUsd
// })
// console.log(movements, movementsToUsd)
// //--**** As an arrow function ***--//

// const movementsToUsdArrow = movements.map(mov => mov * eurToUsd)


//--*** for Of example -- *** ///
// const movementsUSDfor = []
// for (const mov of movements) {
//   movementsUSDfor.push(mov * eurToUsd)
//   console.log(movementsUSDfor)
// }
  
//   const movementsDescriptions = movements.map(
//     (mov, i) =>
//       `Movement ${i + 1}: You ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(
//         mov
//       )}`
//   );
//   console.log(movementsDescriptions);

// console.log('last')
// console.log(movementsDescriptions)

// if (movement > 0) {
//   return `Movement ${i + 1}: You deposited ${movement}`
// } else {
//   return `Movement ${i + 1}: You withdrew ${Math.abs(movement)}`
// }
//////////////////////////////////////////////////
//******--FILTER---********* */

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// const deposits = movements.filter(mov => mov > 0);
  
// console.log(deposits)

// As a for of loop

// const depositsFor = [];
// for (const mov of movements) if(mov > 0) depositsFor.push(mov);
// console.log(depositsFor;)

// const withdrawals = movements.filter(mov => mov < 0);
// console.log(withdrawals)

const balance = movements.reduce(function(acc, cur, i, arr) {
  console.log(`Iteration ${i}: ${acc}`);
  return acc + cur;
}, 0)
console.log(balance)

//////////////////

const eurToUsd = 1.1
const totalDepositsUSD = movements
  .filter(mov => mov > 0)
  .map(mov => mov * eurToUsd)
  .reduce((acc, mov) => acc + mov, 0);

console.log(totalDepositsUSD)
/////////////////////////////////

const firstWithdrawal = movements.find(mov => mov < 0)
console.log(firstWithdrawal)

console.log(accounts)
  
const account = accounts.find(account => account.owner === 'Jessica Davis');
console.log(account)