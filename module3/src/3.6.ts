{
  // getter and setter

  class BankAccount {
    public readonly id: number;
    public name: string;
    protected _balance: number;

    constructor(id: number, name: string, balance: number) {
      this.id = id;
      this.name = name;
      this._balance = balance;
    }
    // public addDeposit(amount: number) {
    //   this._balance = this._balance + amount;
    // }

    // with setter

    set deposit(amount: number) {
      this._balance = this.balance + amount;
    }

    // public getBalance() {
    //   return this._balance;
    // }

    // with getter
    get balance() {
      return this._balance;
    }
  }

  class StudentAccount extends BankAccount {
    test() {
      this._balance;
    }
  }

  const goribManusherAccount = new BankAccount(111, "Sazid", 20);

  //   console.log(goribManusherAccount);
  //   goribManusherAccount.addDeposit(20); //function calling
  //   const myBalance = goribManusherAccount.getBalance(); // function calling
  //   console.log(myBalance);

  //    we ar getting and setting the property by calling function. This can be done using getter and setter
  //  we want to  write like this "goribManusherAccount._balance = 20". But this balance will not overwrite, it will ook like property but work like function

  const myBalance = goribManusherAccount.balance;
  console.log(myBalance);
  goribManusherAccount.deposit = 10;
  console.log(goribManusherAccount.balance);
}
