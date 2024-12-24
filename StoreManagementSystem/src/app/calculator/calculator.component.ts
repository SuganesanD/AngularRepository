import { Component, inject } from '@angular/core';
import { CalculationsService } from '../calculations.service';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {

  calculator:CalculationsService=inject(CalculationsService);
}
