import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent {

  Username:string=""
  a=0;
  clickstate=0
  clicklist:number[]=[]
  paragrapharray:string[]=[]
  para:string=""

  click(){
    this.paragrapharray.push(this.para)
    this.a=0
    this.clickstate=0
    this.para="";
    this.clickstate++
    this.clicklist.push(this.clickstate) 
  }
  clickalert(){
    alert("Submitted!!!👍👍👍")
  }
  clickcontainer(){
    if(this.para==""){
      alert("Please enter the feedback") 
    }
    else{
    this.click()
    // setTimeout(() => {
    //   this.clickalert()
    // },500);
    }
    
  }
}
