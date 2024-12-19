import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemsTableComponent } from './items-table/items-table.component';
import { BillComponent } from './bill/bill.component';


const routes:Routes=[{path:'',component:ItemsTableComponent},
  {path:'submit',component:BillComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
