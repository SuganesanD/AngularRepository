import { Component } from '@angular/core';
import { CalculationsService } from '../calculations.service';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {
  boolvalue:boolean=false;

  calculator=new CalculationsService
  addmoreitem(){
    this.calculator.addmoreitems()
  }

  proceed(){
    this.boolvalue=true
  }

  
 
}
