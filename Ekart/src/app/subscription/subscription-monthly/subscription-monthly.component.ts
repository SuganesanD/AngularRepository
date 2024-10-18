import { Component } from '@angular/core';
import { subscriptionClass } from 'src/app/services/subscription.service';

@Component({
  selector: 'app-subscription-monthly',
  templateUrl: './subscription-monthly.component.html',
  styleUrls: ['./subscription-monthly.component.css'],
  providers:[subscriptionClass]
})
export class SubscriptionMonthlyComponent {
  constructor(private sub:subscriptionClass){
  }
  subscribe(){  
    this.sub.subscriptionService("monthly")
  }

}
