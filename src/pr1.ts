console.log('pr1.ts loaded!');

type Deposit = (v: number) => void;
interface BankAccount {
    money: number;
    deposit: Deposit;
}
interface Client {
    name: string;
    bankAccount: BankAccount;
    hobbies: string[];
}

let bankAccount: BankAccount =  {
    money: 2000,
    deposit(value: number): void {
        this.money += value;
    }
};

let myself: Client = {
    name: "Max",
    bankAccount: bankAccount,
    hobbies: ["Sports", "Cooking"]
};

myself.bankAccount.deposit(3000);

console.log(myself);
document.write(JSON.stringify(myself));
