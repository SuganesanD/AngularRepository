import { Component ,Input} from '@angular/core';

@Component({
  selector: 'app-productcardlist',
  templateUrl: './productcardlist.component.html',
  styleUrls: ['./productcardlist.component.css']
})
export class ProductcardlistComponent {
  products=[{name:"bottle",price:20,description:"It is the bottle",availability:'true'},
    {name:"phone",price:40,description:"It is the phone",availability:'true'},
    {name:"bike",price:500,description:"It is the bike",availability:'false'}
  ]

}
