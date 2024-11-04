import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-productcard',
  templateUrl: './productcard.component.html',
  styleUrls: ['./productcard.component.css']
})
export class ProductcardComponent {
  @Input()
  productname:string=''
  @Input()
  productprice:number=0
  @Input()
  productdescription=''
  @Input()
  productavailability=''

}
