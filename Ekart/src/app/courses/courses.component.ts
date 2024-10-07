import { NgStyle } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent {
  value1:string="Add To Cart"
  value2:string="Add To Cart"
  value3:string="Add To Cart"
  value4:string="Add To Cart"
  value5:string="Add To Cart"
  value6:string="Add To Cart"

  initialval1:number=0
  initialval2:number=0
  initialval3:number=0
  initialval4:number=0
  initialval5:number=0
  initialval6:number=0

  totalvalue:number=0

  clickedbtn1(){
    if(this.initialval1==0){
    this.initialval1++
    this.totalvalue+=this.initialval1
    this.value1="Remove"
  }
  else{
    this.initialval1--
    this.value1="Add To Cart"
    this.totalvalue-=1
  }
  }

  clickedbtn2(){
    if(this.initialval2==0){
    this.initialval2++
    this.value2="Remove"
    this.totalvalue+=this.initialval2
  }
  else{
    this.initialval2--
    this.value2="Add To Cart"
    this.totalvalue-=1
  }
  }

  clickedbtn3(){
    if(this.initialval3==0){
    this.initialval3++
    this.value3="Remove"
    this.totalvalue+=this.initialval3
  }
  else{
    this.initialval3--
    this.value3="Add To Cart"
    this.totalvalue-=1
  }
  }

  clickedbtn4(){
    if(this.initialval4==0){
    this.initialval4++
    this.value4="Remove"
    this.totalvalue+=this.initialval4
  }
  else{
    this.initialval4--
    this.value4="Add To Cart"
    this.totalvalue-=1
  }
  }

  clickedbtn5(){
    if(this.initialval5==0){
    this.initialval5++
    this.value5="Remove"
    this.totalvalue+=this.initialval5
  }
  else{
    this.initialval5--
    this.value5="Add To Cart"
    this.totalvalue-=1
  }
  }

  clickedbtn6(){
    if(this.initialval6==0){
    this.initialval6++
    this.value6="Remove"
    this.totalvalue+=this.initialval6
  }
  else{
    this.initialval6--
    this.value6="Add To Cart"
    this.totalvalue-=1
  }
  }


}
