import { BaseBankAccount } from './base-bank-account.model';
import { BankAccountType } from 'src/constants/base-account-type.enum';

export class RonAccountType extends BaseBankAccount {

    constructor() {
        super(BankAccountType.RON);
    }

    public totalBallance(): number {
        return this.ballance;
    }
}