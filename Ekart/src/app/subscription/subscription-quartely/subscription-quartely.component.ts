import { Component } from '@angular/core';
import { subscriptionClass } from '../../services/subscription.service';

@Component({
  selector: 'app-subscription-quartely',
  templateUrl: './subscription-quartely.component.html',
  styleUrls: ['./subscription-quartely.component.css'],
  providers:[subscriptionClass]
})
export class SubscriptionQuartelyComponent {
  constructor(private sub:subscriptionClass){

  }
  subscribe(){
    this.sub.subscriptionService("quartely")
  }
}
