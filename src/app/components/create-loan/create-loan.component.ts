import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute, Params } from '@angular/router';
import { User } from 'src/app/models/user';
import { FormControl, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'loan',
  templateUrl: './create-loan.component.html',
  styleUrls: ['./create-loan.component.css'],
  providers:[UserService]
})
export class CreateLoanComponent implements OnInit {
  email = new FormControl('', [Validators.required, Validators.email]);
  amount = new FormControl('', [Validators.max(100000), Validators.min(0)]);
  name = new FormControl('',[Validators.required]);
  idCard = new FormControl('', Validators.required);
  public arrayValues = [true, false] 
  /* arrayValues = [true,false]; */
  public user:User;
  public date: Date;
  public status:string
  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _userService: UserService
    
  ) {
    this.user = new User(
    "",
    "",
    "",
    "",
    true||false,
    "",
    this.date = new Date)
    this.status = ''
   }
  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'Debe de ingresar un correo';
    }

    return this.email.hasError('email') ? 'Correo no válido' : '';
  }
  ngOnInit(): void {
      
  }
  getNameErrorMessage(){
    if(this.name.hasError('required')){
      return 'Debe escribir un nombre'
    }else{
      return ''
    }
    
  }
  getIdCardErrorMessage(){
    if(this.idCard.hasError('required')){
      return 'Debe de ingresar una célula'
    }else{
      return ''
    }
  }
  onSubmit(){
    /* this.arrayValues = Math.random() >= 0.5; */
    this.user.aprobed = Math.round(Math.random())
    if(this.user.aprobed == 1){
      this.user.aprobed = true;
    }else{
      this.user.aprobed = false;
    }
    this._userService.register(this.user).subscribe(
      response =>{
        if(response){
          console.log(response);
          if(this.user.aprobed == true){
            this.status = "success";
            
          }else{
            if(this.user.aprobed == false){
              this.status = "error"
              
            }
          }
         
        }
        
      }
      
    );
    
  }

}
