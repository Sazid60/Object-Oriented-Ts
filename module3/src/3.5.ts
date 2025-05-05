{
  //
  // Access Modifier
  // We wilL Modify the Access According To Our Need

  class BankAccount {
    // public id: number;
    // public name: string;
    // public balance: number;
    //This public access modifier helps to access all the property everywhere
    // this is not also right
    public readonly id: number;
    // readonly allows to see the property but do not allow to change
    public name: string;
    // the balance should not be accessible as well . If we give read only it will not allow further change. but the balance should be changeable at the same time it should be protected so that no one can change. Its like we can see balance but can not change directly. private access modifier comes with a solution that it only allows to change within the class
    // private _balance: number;
    protected _balance: number;

    constructor(id: number, name: string, balance: number) {
      this.id = id;
      this.name = name;
      this._balance = balance;
    }
    // method that works to diopside new balance
    //  we can ma this public too
    public addDeposit(amount: number) {
      this._balance = this._balance + amount;
    }
    //  we can ma this public too
    public getBalance() {
      return this._balance;
    }
  }

  //   When The situation is like we have to keep the balance protected from outer world but want to access into another instance that is the the child of the parent who is holding the balance we have to use "protected" instead of private since private only allows to access within the class but protected allows to access them in the instance as well
  class StudentAccount extends BankAccount {
    test() {
      this._balance;
    }
  }

  const goribManusherAccount = new BankAccount(111, "Sazid", 20);

  console.log(goribManusherAccount);
  //   goribManusherAccount.id = 20
  //   goribManusherAccount.balance = 2000
  // This is not right because no one should be able to change the properties. Here comes access Modifier.
  goribManusherAccount.addDeposit(20);
  const myBalance = goribManusherAccount.getBalance();
  console.log(myBalance);
}
