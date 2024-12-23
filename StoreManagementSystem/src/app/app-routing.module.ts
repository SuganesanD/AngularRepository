import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { TableComponent } from './table/table.component';
import { BillComponent } from './bill/bill.component';

const routes: Routes = [{path:'',component:HomeComponent},
  {path:'home',component:HomeComponent},
  {path:"calculator",component:CalculatorComponent},
  {path:"table",component:TableComponent},
  {path:"bill",component:BillComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
