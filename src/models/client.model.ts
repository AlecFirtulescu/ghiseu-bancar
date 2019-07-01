import { BaseModel } from './base.model';
import { BaseBankAccount } from './bank-account/base-bank-account.model';
import { ISavingsBankAccount } from './bank-account/interfaces/savings-bank-account.interface';

export class Client extends BaseModel {

    public cnp: string;
    public name: string;
    public address: string;
    public accounts: BaseBankAccount[];

    constructor(cnp: string, accounts: BaseBankAccount[], name: string, address?: string) {
        super();
        if (!accounts || accounts.length <= 0 || accounts.length > 5) {
            throw Error('Number of accounts its incorect');
        }
        this.cnp = cnp;
        this.accounts = accounts;
        this.name = name;
        this.address = address;
    }

    public print() {
        console.log(`${this.cnp}, ${this.name}, ${this.address ? this.address : ''}`);
        this.accounts.forEach(account => {
            console.log(`[${account.id}], ${account.accountType}, ${account.totalBallance()}, ${'intereset' in account ? (<ISavingsBankAccount>account).intereset() : ''}`);
        })
    }

}