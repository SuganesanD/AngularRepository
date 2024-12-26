import { Component, inject } from '@angular/core';
import { CalculationsService } from '../calculations.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  login:CalculationsService=inject(CalculationsService);
  loginrouter:Router=inject(Router);

}
