{
  class BankAccount {
    public readonly id: number;
    public name: string;
    protected _balance: number;
    // private _balance:number;
    constructor(id: number, name: string, balance: number) {
      this.id = id;
      this.name = name;
      this._balance = balance;
    }
    public addDeposit(amount: number) {
      this._balance = this._balance + amount;
    }
    private getBalance() {
      return this._balance;
    }

    getHiddenMethod() {
      return this.getBalance();
    }
  }

  class StudentAccount extends BankAccount {
    test() {
      this._balance;
    }
  }

  const goribManusherAccount = new BankAccount(111, "Sazid", 20);
  console.log(goribManusherAccount);
  goribManusherAccount.addDeposit(20);
  const myBalance = goribManusherAccount.getHiddenMethod();
  console.log(myBalance);
}
