import { Component, Input } from '@angular/core';
import { ContainerComponent } from '../container.component';

@Component({
  selector: 'app-side-container',
  templateUrl: './side-container.component.html',
  styleUrls: ['./side-container.component.css']
})
export class SideContainerComponent {
  @Input() listitems:any[]=[];
}
