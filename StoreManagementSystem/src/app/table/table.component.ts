import { Component } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  productname:string[]=["oil","Toothpaste","Rice","Soap","Maida","Shampoo","Sugar","Atta","ToiletCleaner","Dishwasher"];
  productid:number[]=[5001,5002,5003,5004,5005,5006,5007,5008,5009,5010]
  productprice:number[]=[20,34,40,50,11,26,47,89,67,83];
  productdiscount:any[]=["-","-","-","20","20","-","5","30","23","5"]

  Productname:string='';
  Productid:number=0;
  Productprice:number=0;
  Productdiscount:string=""

  displayvalue:boolean=false;



  additem(){
    this.displayvalue=true
   
  }

  add(){
    if((((this.Productid) && (this.Productprice) ) && (this.Productdiscount))!=0){
    this.productname.push(this.Productname);
    this.productid.push(this.Productid);
    this.productprice.push(this.Productprice);
    this.productdiscount.push(this.Productdiscount);
    }

    else{
      alert("Fill all the fields!")
    }

  }


}
