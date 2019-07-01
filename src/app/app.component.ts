import { Component } from '@angular/core';
import { Bank } from 'src/models/bank.model';
import { Client } from 'src/models/client.model';
import { RonBankAccount } from 'src/models/bank-account/ron-bank-account.model';
import { EurBankAccount } from 'src/models/bank-account/eur-bank-account.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor() {
    const bank = new Bank();

    const bankAccount11 = new RonBankAccount('11', 100);
    const bankAccount12 = new RonBankAccount('12', 200);
    const bankAccount13 = new EurBankAccount('13', 200);
    const client1 = new Client('1921003002421', [bankAccount11, bankAccount12, bankAccount13], 'Ionescu Alin');
    bank.addClient(client1);

    const bankAccount21 = new RonBankAccount('21', 124.1);
    const bankAccount22 = new EurBankAccount('22', 233);
    const client2 = new Client('2940101909321', [bankAccount21, bankAccount22], 'Popescu Ioana');
    bank.addClient(client2);

    try {
      const client3 = new Client('1904212312312', [], 'Eminescu Mihai');
    } catch (error) {
      this.handleError(error);
    }

    const bankAccount41 = new RonBankAccount('31', 124.1);
    const bankAccount42 = new EurBankAccount('32', 233);
    const bankAccount43 = new EurBankAccount('33', 123);
    const bankAccount44 = new EurBankAccount('34', 10000);
    const client4 = new Client('1900202210312', [bankAccount41, bankAccount42, bankAccount43, bankAccount44], 'Ionescu Alin');
    bank.addClient(client4);

    console.log('Dobanda contului bankAccount33 este: ', bankAccount43.intereset());
    console.log('Dobanda contului bankAccount34 este: ', bankAccount44.intereset());

    try {
      bank.transferMoney('11', '21', 50);
    } catch (error) {
      this.handleError(error);
    }

    bank.printClientWithCNP('1921003002421');
    bank.printClientWithCNP('2940101909321');

    try {
      bank.transferMoney('11', '21', 150);
    } catch (error) {
      this.handleError(error);
    }

    try {
      bank.transferMoney('31', '32', 150);
    } catch (error) {
      this.handleError(error);
    }
  }

  private handleError(error: Error) {
    console.error(error.message);
  }
}
