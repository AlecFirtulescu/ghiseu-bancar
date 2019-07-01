import { BaseBankAccount } from './base-bank-account.model';
import { BankAccountType } from 'src/constants/base-account-type.enum';
import { ISavingsBankAccount } from './interfaces/savings-bank-account.interface';
import { Constants } from 'src/constants/constants';

export class EurAccountType extends BaseBankAccount implements ISavingsBankAccount {

    constructor() {
        super(BankAccountType.EUR);
    }

    public totalBallance(): number {
        return this.ballance * Constants.RON_TO_EUR_RATE;
    }

    public intereset(): number {
        if (this.ballance > 500) {
            return 1;
        }
        return 0;
    }

    public addAmount(amount: number) {
        throw Error('Cannot add amount to EUR account')
    }
}