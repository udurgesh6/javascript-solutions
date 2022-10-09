class BankCustomer {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

class BankAccount {
  constructor(forCust, balance) {
    this.forCust = forCust;
    this.balance = balance;
  }
}

let BC1 = new BankCustomer("Durgesh", "Upadhyay");

let BankAcc1 = new BankAccount(BC1, 14000);
console.log(BankAcc1.forCust);
