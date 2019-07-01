import { BaseBankAccount } from './base-bank-account.model';
import { BankAccountType } from 'src/constants/base-account-type.enum';

export class RonBankAccount extends BaseBankAccount {

    constructor(accountNumber: string, ballance: number) {
        super(BankAccountType.RON, accountNumber, ballance);
    }

    public totalBallance(): number {
        return this.ballance;
    }
}