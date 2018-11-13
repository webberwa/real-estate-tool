import { Component, OnInit, Input, Inject } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Apollo } from 'apollo-angular';
import { AddExpenseGQL, GetInvestmentGQL } from '../../apollo-angular-services';
import { ActivatedRoute } from '@angular/router';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material';

@Component({
  selector: 'app-expenses-create',
  templateUrl: './expenses-create.component.html',
  styleUrls: ['./expenses-create.component.scss']
})
export class ExpensesCreateComponent implements OnInit {
  expenseForm = new FormGroup({
    title: new FormControl(''),
    description: new FormControl(''),
    price: new FormControl('')
  });

  @Input()
  investmentId;
  constructor(
    private dialog: MatDialog,
    private apollo: Apollo,
    private addExpenseGQL: AddExpenseGQL,
    private investmentGQL: GetInvestmentGQL,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit() {}

  addExpense() {
    const data = {
      title: this.expenseForm.get('title').value,
      description: this.expenseForm.get('description').value,
      price: parseFloat(this.expenseForm.get('price').value),
      investment: {
        connect: {
          id: this.data.investmentId
        }
      }
    };

    console.log(data);

    this.apollo
      .mutate({
        mutation: this.addExpenseGQL.document,
        variables: {
          data
        },
        refetchQueries: [
          {
            query: this.investmentGQL.document,
            variables: {
              where: {
                id: this.data.investmentId
              }
            }
          }
        ]
      })
      .subscribe(res => {
        console.log(res);
        this.dialog.closeAll();
      });
  }
}
