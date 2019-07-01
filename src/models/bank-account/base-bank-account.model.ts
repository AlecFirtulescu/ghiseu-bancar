import { BaseModel } from '../base.model';
import { BankAccountType } from 'src/constants/base-account-type.enum';
import { ITotalBallance } from './interfaces/total-ballance.interface';

export abstract class BaseBankAccount extends BaseModel implements ITotalBallance {

    public accountNumber: string;
    public accountType: BankAccountType;
    protected ballance: number;

    constructor(accountType: BankAccountType, accountNumber: string, ballance: number) {
        super();
        this.accountType = accountType;
        this.ballance = ballance;
        this.accountNumber = accountNumber;
        this.id = Math.floor(Math.random() * 1000) + 1; // generating random id
    }

    public abstract totalBallance(): number;

    public addAmount(amount: number) {
        this.ballance += amount;
    }

    public removeAmmount(amount: number) {
        this.ballance -= amount;
    }
}