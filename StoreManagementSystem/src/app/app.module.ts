import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { TableComponent } from './table/table.component';
import { BillComponent } from './bill/bill.component';
import { FormsModule } from '@angular/forms';
import { CalculationsService } from './calculations.service';
import { LoginComponent } from './login/login.component';
import { FirstnavbarComponent } from './firstnavbar/firstnavbar.component';
import { SignupComponent } from './signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    CalculatorComponent,
    TableComponent,
    BillComponent,
    LoginComponent,
    FirstnavbarComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [CalculationsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
