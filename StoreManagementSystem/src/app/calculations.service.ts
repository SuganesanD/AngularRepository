import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculationsService {

  constructor() { }
  Itemid:number=0
  ItemQuantity:number=0
  title = 'StoreManagement';
  Yesorno:string=""
  price:number=0
  total:number=0
  Totalvalue:number=0;
  itemarray:string[]=["1"]
  value:boolean=false;
  itemiddetails:number[]=[]
  itemquantitydetails:number[]=[]
  itemtotaldetails:number[]=[]
  submitvalue:boolean=false;

  addmoreitems(){
    
    if((this.Itemid==5001)  && (this.ItemQuantity!=0)){
      this.price=20
      this.total=(this.price*this.ItemQuantity);
      this.Totalvalue=this.Totalvalue+this.total;
      this.itemtotaldetails.push(this.total);
      this.itemiddetails.push(this.Itemid);
      this.itemquantitydetails.push(this.ItemQuantity);
      this.Itemid=0
      this.ItemQuantity=0
      this.total=0

    }

    else if((this.Itemid==5002) && (this.ItemQuantity!=0)){
      this.price=25
      this.total=this.price*this.ItemQuantity;
      this.Totalvalue=this.Totalvalue+this.total;
      this.itemiddetails.push(this.Itemid);
      this.itemquantitydetails.push(this.ItemQuantity);
      this.itemtotaldetails.push(this.total);
      this.Itemid=0
      this.ItemQuantity=0
    }
    else if((this.Itemid==5003)  && (this.ItemQuantity!=0)){
      this.price=30
      this.total=this.price*this.ItemQuantity;
      this.Totalvalue=this.Totalvalue+this.total;
      this.itemiddetails.push(this.Itemid);
      this.itemquantitydetails.push(this.ItemQuantity);
      this.itemtotaldetails.push(this.total);
      this.Itemid=0
      this.ItemQuantity=0
    }
    else if((this.Itemid==5004)  && (this.ItemQuantity!=0)){
      this.price=40*0.2
      this.total=this.price*this.ItemQuantity;
      this.Totalvalue=this.Totalvalue+this.total;
      this.itemiddetails.push(this.Itemid);
      this.itemquantitydetails.push(this.ItemQuantity);
      this.itemtotaldetails.push(this.total);
      this.Itemid=0
      this.ItemQuantity=0
    }
    else if((this.Itemid==5005)  && (this.ItemQuantity!=0)){
      this.price=50*0.2
      this.total=this.price*this.ItemQuantity;
      this.Totalvalue=this.Totalvalue+this.total;
      this.itemiddetails.push(this.Itemid);
      this.itemquantitydetails.push(this.ItemQuantity);
      this.itemtotaldetails.push(this.total);
      this.Itemid=0
      this.ItemQuantity=0
    }

    else if((this.Itemid==5006)  && (this.ItemQuantity!=0)){
      this.price=45
      this.total=this.price*this.ItemQuantity;
      this.Totalvalue=this.Totalvalue+this.total;
      this.itemiddetails.push(this.Itemid);
      this.itemquantitydetails.push(this.ItemQuantity);
      this.itemtotaldetails.push(this.total);
      this.Itemid=0
      this.ItemQuantity=0
    }

    else if((this.Itemid==5007)  && (this.ItemQuantity!=0)){
      this.price=15*0.05
      this.total=this.price*this.ItemQuantity;
      this.Totalvalue=this.Totalvalue+this.total;
      this.itemiddetails.push(this.Itemid);
      this.itemquantitydetails.push(this.ItemQuantity);
      this.itemtotaldetails.push(this.total);
      this.Itemid=0
      this.ItemQuantity=0
    }

    else if((this.Itemid==5008)  && (this.ItemQuantity!=0)){
      this.price=48*0.3
      this.total=this.price*this.ItemQuantity;
      this.Totalvalue=this.Totalvalue+this.total;
      this.itemiddetails.push(this.Itemid);
      this.itemquantitydetails.push(this.ItemQuantity);
      this.itemtotaldetails.push(this.total);
      this.Itemid=0
      this.ItemQuantity=0
    }

    else if((this.Itemid==5009)  && (this.ItemQuantity!=0)){
      this.price=37*0.23
      this.total=this.price*this.ItemQuantity;
      this.Totalvalue=this.Totalvalue+this.total;
      this.itemiddetails.push(this.Itemid);
      this.itemquantitydetails.push(this.ItemQuantity);
      this.itemtotaldetails.push(this.total);
      this.Itemid=0
      this.ItemQuantity=0
    }

    else if((this.Itemid==5010)  && (this.ItemQuantity!=0)){
      this.price=38*0.05
      this.total=this.price*this.ItemQuantity;
      this.Totalvalue=this.Totalvalue+this.total;
      this.itemiddetails.push(this.Itemid);
      this.itemquantitydetails.push(this.ItemQuantity);
      this.itemtotaldetails.push(this.total);
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

}
