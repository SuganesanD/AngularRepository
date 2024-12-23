import { Component } from '@angular/core';
import { CalculationsService } from './calculations.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'StoreManagementSystem';
  calculations=new CalculationsService;
}
