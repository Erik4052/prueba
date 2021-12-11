import { Component, Input, OnInit } from '@angular/core';
import { Router,ActivatedRoute, Params } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { User } from '../../models/user';
import { bank } from 'src/app/models/bank';
import { AmountComponent } from '../amount/amount.component';
import { payment } from '../../models/payment';
@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.css']
})
export class PaymentsComponent implements OnInit {
  public users: User[] = [];
  public bank: bank[] = [];
  //public aprobed;
  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _userService: UserService) {
    this.users = [] = [];
    this.bank = [] = [];
     }

  ngOnInit(): void {
    this.getLoanAprobed();
  }
  getLoanAprobed(){
      this._userService.getLoanAprobed().subscribe(
        response => {
          this.users = response;
        }
      )
      
  }
 /*  pay(){
    this._userService.getLoanAprobed().subscribe(
      response => {
        this.users = response; 
      }
    )
    
  } */

}
