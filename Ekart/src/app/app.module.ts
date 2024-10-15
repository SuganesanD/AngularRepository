import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RollerComponent } from './roller/roller.component';
import { MainContentComponent } from './main-content/main-content.component';
import { CardsComponent } from './cards/cards.component';
import { FooterComponent } from './footer/footer.component';
import { CoursesComponent } from './courses/courses.component';
import { SubscriptionComponent } from './subscription/subscription.component';
import { SubscriptionQuartelyComponent } from './subscription/subscription-quartely/subscription-quartely.component';
import { SubscriptionMonthlyComponent } from './subscription/subscription-monthly/subscription-monthly.component';
import { SubscriptionYearlyComponent } from './subscription/subscription-yearly/subscription-yearly.component';
import { FormsComponent } from './forms/forms.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    RollerComponent,
    MainContentComponent,
    CardsComponent,
    FooterComponent,
    CoursesComponent,
    SubscriptionComponent,
    SubscriptionQuartelyComponent,
    SubscriptionMonthlyComponent,
    SubscriptionYearlyComponent,
    FormsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
