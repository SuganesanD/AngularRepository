import { Component, inject } from '@angular/core';
import { CalculationsService } from '../calculations.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  signup:CalculationsService=inject(CalculationsService)
 

}
