import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute, Params } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { User } from '../../models/user';
@Component({
  selector: 'app-nopayments',
  templateUrl: './nopayments.component.html',
  styleUrls: ['./nopayments.component.css']
})
export class NopaymentsComponent implements OnInit {
  public users: User[] = [];
  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _userService: UserService
  ) {
    this.users = [] = [];
   }
   
  ngOnInit(): void {
    this.getNotLoanAprobed();
  }
  getNotLoanAprobed(){
    this._userService.getNotLoanAprobed().subscribe(
      response => {
        this.users = response;
      }
    )
  }

}
