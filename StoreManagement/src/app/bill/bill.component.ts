import { Component } from '@angular/core';
import { ItemsTableComponent } from '../items-table/items-table.component';
ItemsTableComponent

@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.css']
})
export class BillComponent {
  itemexport=new ItemsTableComponent;
  Secondsubmit(){
    this.itemexport.submit();
  }
  itemiddetail2=this.itemexport.itemiddetails;
  itemquantitydetails2=this.itemexport.itemquantitydetails;
  submitvalue2=this.itemexport.submitvalue;
  Totalvalue2=this.itemexport.Totalvalue;
  price2=this.itemexport.price
}
