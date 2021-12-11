import { Component, OnInit, Input,Output } from '@angular/core';
import { bank } from 'src/app/models/bank';
import { User } from '../../models/user';
@Component({
  selector: 'app-amount',
  templateUrl: './amount.component.html',
  styleUrls: ['./amount.component.css']
})
export class AmountComponent implements OnInit {
  public bank: bank[] = [];
  public users: User[] = [];
  amount:number = 10000;
  constructor(
    
  ) {
    this.users = [] = [];
    this.bank = [] = [];

   }

  ngOnInit(): void {

  }


}
