import { BaseModel } from './base.model';
import { Client } from './client.model';
import { BankAccountType } from 'src/constants/base-account-type.enum';

export class Bank extends BaseModel {
    public bankCode: string;
    public clients: Client[] = [];

    public addClient(client: Client) {
        this.clients.push(client);
    }

    public printClientWithCNP(cnp: string) {
        const client = this.findClientWithCNP(cnp);
        if (!client) {
            throw Error('Client not found in this bank');
        }
        client.print();
    }

    public transferMoney(fromAccountNumber: string, toAccountNumber: string, amount: number) {
        const fromAccount = this.findAccountWithAccountNumber(fromAccountNumber);
        const toAccount = this.findAccountWithAccountNumber(toAccountNumber);
        if (!fromAccount) {
            throw Error(`Account with number ${fromAccountNumber} was not found`);
        }

        if (!toAccount) {
            throw Error(`Account with number ${toAccountNumber} was not found`);
        }

        if (fromAccount.accountType !== toAccount.accountType) {
            throw Error(`Cannot transfer ${fromAccount.accountType} to ${toAccount.accountType} account`);
        }

        if (fromAccount.accountType === BankAccountType.RON) {
            if (fromAccount.totalBallance() - amount >= 0) {
                fromAccount.removeAmmount(amount);
                toAccount.addAmount(amount);
            } else {
                throw Error(`Cannot transfer ${fromAccount.accountType} have insuficient founds`);
            }
        } else {
            throw Error(`Cannot transfer ${fromAccount.accountType}`);
        }
    }

    private findAccountWithAccountNumber(accountNumber: string) {
        const client = this.findClientWithAccountNumber(accountNumber);
        if (!client) {
            return null;
        }
        return client.accounts.find(a => a.accountNumber === accountNumber);
    }

    private findClientWithAccountNumber(accountNumber: string): Client {
        return this.clients.find(client => client.accounts.find(bankAccount => bankAccount.accountNumber === accountNumber) !== undefined);
    }

    private findClientWithCNP(cnp: string): Client {
        return this.clients.find(c => c.cnp === cnp);
    }
}