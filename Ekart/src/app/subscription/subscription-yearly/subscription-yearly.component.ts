import { Component } from '@angular/core';
import { subscriptionClass } from '../services/subscription.service';

@Component({
  selector: 'app-subscription-yearly',
  templateUrl: './subscription-yearly.component.html',
  styleUrls: ['./subscription-yearly.component.css'],
  providers:[subscriptionClass]
})
export class SubscriptionYearlyComponent {
  constructor(private sub:subscriptionClass){

  }
  subscribe(){
    this.sub.subscriptionService("yearly")
  }

}
