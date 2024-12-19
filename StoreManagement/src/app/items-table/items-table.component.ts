import { Component } from '@angular/core';

@Component({
  selector: 'app-items-table',
  templateUrl: './items-table.component.html',
  styleUrls: ['./items-table.component.css']
})
export class ItemsTableComponent {
  title = 'StoreManagement';
  Itemid:number=0;
  ItemQuantity:number=0;
  Yesorno:string=""
  price:number=0
  total:number=0
  Totalvalue:number=0;
  itemarray:string[]=["1"]
  value:boolean=false;
  itemiddetails:number[]=[]
  itemquantitydetails:number[]=[]
  submitvalue:boolean=false;

  yes(){
    if((this.Itemid==5001)  && (this.ItemQuantity!=0)){
      this.price=20
      this.total=this.price*this.ItemQuantity;
      this.Totalvalue=this.Totalvalue+this.total;
      this.itemiddetails.push(this.Itemid);
      this.itemquantitydetails.push(this.ItemQuantity);
      this.Itemid=0
      this.ItemQuantity=0

    }

    else if((this.Itemid==5002) && (this.ItemQuantity!=0)){
      this.price=25
      this.total=this.price*this.ItemQuantity;
      this.Totalvalue=this.Totalvalue+this.total;
      this.itemiddetails.push(this.Itemid);
      this.itemquantitydetails.push(this.ItemQuantity);
      this.Itemid=0
      this.ItemQuantity=0
    }
    else if((this.Itemid==5003)  && (this.ItemQuantity!=0)){
      this.price=30
      this.total=this.price*this.ItemQuantity;
      this.Totalvalue=this.Totalvalue+this.total;
      this.itemiddetails.push(this.Itemid);
      this.itemquantitydetails.push(this.ItemQuantity);
      this.Itemid=0
      this.ItemQuantity=0
    }
    else if((this.Itemid==5004)  && (this.ItemQuantity!=0)){
      this.price=40*0.2
      this.total=this.price*this.ItemQuantity;
      this.Totalvalue=this.Totalvalue+this.total;
      this.itemiddetails.push(this.Itemid);
      this.itemquantitydetails.push(this.ItemQuantity);
      this.Itemid=0
      this.ItemQuantity=0
    }
    else if((this.Itemid==5005)  && (this.ItemQuantity!=0)){
      this.price=50*0.2
      this.total=this.price*this.ItemQuantity;
      this.Totalvalue=this.Totalvalue+this.total;
      this.itemiddetails.push(this.Itemid);
      this.itemquantitydetails.push(this.ItemQuantity);
      this.Itemid=0
      this.ItemQuantity=0
    }

    else if((this.Itemid==0 )&& (this.ItemQuantity==0)){
      alert("Enter the Item Id and Quantity");
    }

    else if(this.ItemQuantity==0){
      alert("Item Quantity should not be Zero");
    }

    else{
      alert("Enter the valid Item Id")
    }
  
    this.itemarray.push("1"); 
   
    
  }
  submit(){
    if(this.itemiddetails.length!=0){
    this.submitvalue=true;
    }
  }

}
