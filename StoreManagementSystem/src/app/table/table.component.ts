import { Component, inject } from '@angular/core';
import { CalculationsService } from '../calculations.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {

  table:CalculationsService=inject(CalculationsService);
  


}
