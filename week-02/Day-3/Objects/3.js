'use strict';
const accounts = [
  { clientName: 'Igor', accountNumber: 11234543, balance: 203004099.2 },
  { clientName: 'Vladimir', accountNumber: 43546731, balance: 5204100071.23 },
  { clientName: 'Sergei', accountNumber: 23456311, balance: 1353600.0 },
];
function getNameAndBalance(params) {
  const nameAndBalance = [];
  for (let i = 0; i < params.length; i++) {
    nameAndBalance[i] = params[i].clientName + ', ' + params[i].balance;
  }
  return nameAndBalance;
}
console.log(getNameAndBalance(accounts));
// Create function that returns the name and balance of cash on an account in a list

// The output should be: "Igor", "203004099.2"

// Create function that transfers an amount of cash from one account to another
// it should have four parameters:
//  - the accounts
//  - from account_number
//  - to account_number
//  - amount of cash to transfer
//
// Log "404 - account not found" if any of the account numbers don't exist to the console.

// transferAmount(accounts, 43546731, 23456311, 500.0);
//After printing the "accounts" it should look like:
// const accounts = [
//	{ clientName: 'Igor', accountNumber: 11234543, balance: 203004099.2 },
//	{ clientName: 'Vladimir', accountNumber: 43546731, balance: 5204099571.23 },
//	{ clientName: 'Sergei', accountNumber: 23456311, balance: 1354100.0 }
//]

// module.exports = {
//   getNameAndBalance: getNameAndBalance,
//   transferAmount: transferAmount,
//   accounts: accounts
// };