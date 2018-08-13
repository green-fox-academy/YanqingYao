'use strict';

const Panama = {
  cash: 0,
  name: 'Panama',
  tax: 0.01,
  deposit: function (amount) {
    // to be implemented
    this.cash += 1000 * (1 - this.tax);
  },
};

const Cyprus = {
  cash: 0,
  name: 'Cyprus',
  tax: 0.05,
  deposit: function (amount) {
    // to be implemented
    this.cash += 1000 * (1 - this.tax);
  },
};

const Shuffler = {
  cash: 10000,
  pick: function pickPOrC(name) {
    if (name === 'Cyprus') {
      this.cash -= 1000;
      const shufflerC = Shuffler.pick.bind(Cyprus);
      Cyprus.deposit(1000);
      console.log(name + ' got 1000');

    } else if (name === 'Panama') {
      this.cash -= 1000;
      const shufflerP = Shuffler.pick.bind(Panama);
      Panama.deposit(1000);
      console.log(name + ' got 1000');
    }
  },
};

Shuffler.pick('Panama'); // prints Panama got 1000
Shuffler.pick('Cyprus'); // prints Cyprus got 1000
Shuffler.pick('Panama'); // prints Panama got 1000
Shuffler.pick('Cyprus'); // prints Cyprus got 1000

console.log(Panama.cash); // 2000
console.log(Cyprus.cash); // 2000
