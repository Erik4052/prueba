import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AppComponent } from "./app.component";

//Components
import { CreateLoanComponent } from "./components/create-loan/create-loan.component";
import { PaymentsComponent } from "./components/payments/payments.component";
import { NopaymentsComponent } from "./components/nopayments/nopayments.component";

const appRoutes: Routes = [
    {path:'', component:CreateLoanComponent},
    {path:'create', component:CreateLoanComponent},
    {path:'payment', component:PaymentsComponent},
    {path:'nopayment', component:NopaymentsComponent}

]

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);
