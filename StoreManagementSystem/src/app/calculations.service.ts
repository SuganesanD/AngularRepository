import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CalculationsService {

  loginrouter:Router=inject(Router);

  constructor() { }

  title = 'StoreManagement';

  Itemid:number=0
  ItemQuantity:number=0
  price:number=0
  discount:number=0
  totaldiscount:number=0
  total:number=0
  Totalvalue:number=0;
  itemarray:string[]=["1"]
  value:boolean=false;
  itemiddetails:number[]=[]
  itemquantitydetails:number[]=[]
  itemtotaldetails:number[]=[]
  submitvalue:boolean=false;
  boolvalue:boolean=false
  addmoreitem:boolean=false


  product:{productname:string,productid:number,productprice:number,productstock:number,productdiscount:number}[] =
  [
    {productname:"Oil",productid:5001,productprice:10,productstock:100,productdiscount:0},
    {productname:"Soap",productid:5002,productprice:20,productstock:100,productdiscount:0},
    {productname:"Face Powder",productid:5003,productprice:30,productstock:100,productdiscount:0},
    {productname:"Milk",productid:5004,productprice:15,productstock:100,productdiscount:20},
    {productname:"Ketchup",productid:5005,productprice:10,productstock:100,productdiscount:20},
    {productname:"Dishwasher",productid:5006,productprice:45,productstock:100,productdiscount:0},
    {productname:"Detergent",productid:5007,productprice:123,productstock:100,productdiscount:30},
    {productname:"Rice",productid:5008,productprice:116,productstock:100,productdiscount:5},
    {productname:"Peanut Butter",productid:5009,productprice:90,productstock:100,productdiscount:10},
    {productname:"Panner",productid:5010,productprice:65,productstock:100,productdiscount:5},
  ]

  //Add new items
  Productname:string='';
  Productid:number=0;
  Productprice:number=0;
  Productdiscount:number=0
  Productstock:number=0;
  displayvalue:boolean=false;
  restockvalue:boolean=false;



  additem(){
    this.displayvalue=true
  }

  add(){
    if((((this.Productid) && (this.Productprice) ) && (this.Productdiscount))!=0){
    this.product.push({productname:this.Productname,productid:this.Productid,productprice:this.Productprice,productstock:this.Productstock,productdiscount:this.Productdiscount});

    }

    else{
      alert("Fill all the fields!")
    }

  }







  addmoreitems(){
    this.addmoreitem=true
    

      if((this.Itemid==0 )&& (this.ItemQuantity==0)){
      alert("Enter the Item Id and Quantity");
    }

    else if(this.ItemQuantity==0){
      alert("Item Quantity should not be Zero");
    }

    else if(this.product.filter(e=> e.productid==this.Itemid).length==0){
      alert("Enter the valid Item ID")
    }

    else {
       for(let i=0;i<this.product.length;i++){
        if((this.Itemid==this.product[i].productid)  && (this.ItemQuantity!=0)){
          if(this.ItemQuantity<=this.product[i].productstock){
            this.price=this.product[i].productprice;
          this.discount=this.product[i].productdiscount/100;
          if(this.discount!=0){
            this.totaldiscount=(this.price*this.ItemQuantity)*this.discount;
            this.total=this.price-this.totaldiscount
          }
          else{
            this.total=(this.price*this.ItemQuantity)
          }
         
          this.Totalvalue=this.Totalvalue+this.total;
          this.itemtotaldetails.push(this.total);
          this.itemiddetails.push(this.Itemid);
          this.itemquantitydetails.push(this.ItemQuantity);  
          this.product[i].productstock-=this.ItemQuantity;
          this.Itemid=0
          this.ItemQuantity=0
          this.total=0
          break;
          }

          else{
            alert(`The Product ID :${this.Itemid}'s stock is insufficient`)
            this.Itemid=0
            this.ItemQuantity=0
          }
          
        }
    }
  }

  }

  proceed(){
    if(this.itemiddetails.length>0){
      this.boolvalue=true
    }
    
  }

  restockbutton(){
    this.restockvalue=true

  }

  restock(){
    for(let i=0;i<this.product.length;i++){
      if((this.Productid==this.product[i].productid )&&(this.Productstock!=0) ){
        this.product[i].productstock+=this.Productstock;
        this.restockvalue=false
        alert("The stock has been successfully added")
        break;
      } 

      else if(this.Productstock==0){
        alert("Stock quantity that should be added cannot be zero")
        break;
      }
      else{
        alert("Enter the valid Product ID")
        break;
      }
    }

  }


  name:string=''
  newpassword:any=''
  password:any=''
  checkboxvalue:string="text";
  checkboxbool:boolean=false;
  loginname:string=''
  loginpassword:any
  flag:number=0

  user:{username:string,userpassword:any}[]=
  [
    {username:"sugu",userpassword:123}
    
  ];

  signup(){
    if(this.newpassword==this.password){
      alert(`Thankyou ${this.name} for your signup with us!Enjoy our services`)
      this.user.push({username:this.name,userpassword:this.password})
      console.log(this.user);
      
      
    }
    else{
      alert("OOPS!!!Your password is not matching");
    }
  }


  login(){  
    for(let i=0;i<this.user.length;i++){  
      if((this.user[i].username==this.loginname)&&( this.user[i].userpassword==this.loginpassword)){
        alert("you are successfully logged in")
        this.loginname=''
        this.loginpassword=''
        this.flag=1
        break;
      }
      else{
        this.flag=0
      }
    }
    if(this.flag==1){
      this.loginrouter.navigate(['/calculator']);
    }

    else{
      alert("Invalid username or password.Don't have account!Sign up to enjoy our services")
      this.loginrouter.navigate(['/signup'])
      this.loginname=''
      this.loginpassword=''
    }

  }

  

}
