import { Component } from '@angular/core';
import { IExpenses } from './expenses';

@Component({
  selector: 'app-expense-list',
  templateUrl: './expense-list.component.html',
  styleUrls: ['./expense-list.component.css']
})
export class ExpenseListComponent {
  // Default data for easy adding of data to the table
  defaultData: IExpenses = {
    type: "cash",
    name: "Netflix",
    date: "2023-03-09",
    amount: 500,
    status: true
  }

  // Stores all the contents of the table
  expenseList: IExpenses[] = []

  // For adding the contents of the table
  addExpense(type: string, name: string, date: string, amount: number): void {
    let tempExpense: IExpenses = {type: type, name: name, date: date, amount: amount, status: true}
    this.expenseList.push(tempExpense);
  }

  // For removing an item on the table
  removeExpense(index: number): void {
    this.expenseList.splice(index, 1);
  }
}
