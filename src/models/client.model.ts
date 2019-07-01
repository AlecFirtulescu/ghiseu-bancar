import { BaseModel } from './base.model';
import { BaseBankAccount } from './bank-account/base-bank-account.model';

export class Client extends BaseModel {

    public cnp: string;
    public name: string;
    public address: string;
    public accounts: BaseBankAccount[];

    constructor(cnp: string, accounts: BaseBankAccount[]) {
        super();
        if (!accounts || accounts.length <= 0 || accounts.length > 5) {
            throw Error('Number of accounts its incorect');
        }
    }

    public print() {
        console.log(`${this.cnp}, ${this.name}, ${this.address ? this.address : ''}`);
        this.accounts.forEach(account => {
            console.log(`[${account.id}], ${account.accountType}, ${account.totalBallance} ${'intereset' in account ? account['intereset'] : ''}`);
        })
    }

}