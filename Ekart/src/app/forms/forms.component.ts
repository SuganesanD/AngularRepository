import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent {
  click(){
    alert("Submitted!!!👍👍👍")
  }
}
