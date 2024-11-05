import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngtemplate';
  state:boolean=true
  onclick(){
    this.state=!this.state
  }
}
