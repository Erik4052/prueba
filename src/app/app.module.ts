import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { appRoutingProviders,routing} from './app.routing';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http'
//Components
import { AppComponent } from './app.component';
import { CreateLoanComponent } from './components/create-loan/create-loan.component';
import { PaymentsComponent } from './components/payments/payments.component';
//Angular Material

import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {AmountComponent} from './components/amount/amount.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule } from '@angular/material/core';
import { NopaymentsComponent } from './components/nopayments/nopayments.component';
@NgModule({
  declarations: [
    AppComponent,
    CreateLoanComponent,
    PaymentsComponent,
    AmountComponent,
    NopaymentsComponent
  ],
  imports: [
    FormsModule,
    HttpClientModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatSidenavModule,
    routing,
  ],
  providers: [
    appRoutingProviders
  ],
  exports:[AmountComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
