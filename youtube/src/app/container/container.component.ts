import { Component, Output } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent {
    list:any[]=[{videolink:"https://www.youtube.com/embed/X-vlp3XeJAY?feature=shared",content:"#01 ContentChild() in Angular | Angular Component & Directives | A Complete Angular Course"},
    {videolink:"https://www.youtube.com/embed/X-vlp3XeJAY?feature=shared",content:"#02 ng-container in Angular | Angular Component & Directives | A Complete Angular Course"},
    {videolink:"https://www.youtube.com/embed/X-vlp3XeJAY?feature=shared",content:"#03 ng-content in Angular | Angular Component & Directives | A Complete Angular Course"},
    {videolink:"https://www.youtube.com/embed/X-vlp3XeJAY?feature=shared",content:"#04 ngFor in Angular | Angular Component & Directives | A Complete Angular Course"},
    {videolink:"https://www.youtube.com/embed/X-vlp3XeJAY?feature=shared",content:"#05 ngIf in Angular | Angular Component & Directives | A Complete Angular Course"},
    {videolink:"https://www.youtube.com/embed/X-vlp3XeJAY?feature=shared",content:"#05 ng-template in Angular | Angular Component & Directives | A Complete Angular Course"},
    {videolink:"https://www.youtube.com/embed/X-vlp3XeJAY?feature=shared",content:"#06 Template Reference variable in Angular | Angular Component & Directives | A Complete Angular Course"},
    {videolink:"https://www.youtube.com/embed/X-vlp3XeJAY?feature=shared",content:"#07 viewchild() in Angular | Angular Component & Directives | A Complete Angular Course"},
    {videolink:"https://www.youtube.com/embed/X-vlp3XeJAY?feature=shared",content:"#09 ContentChildren() in Angular | Angular Component & Directives | A Complete Angular Course"}
  ]
   
}
