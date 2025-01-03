import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TicketBookingFormComponent } from './ticket-booking-form/ticket-booking-form.component';
import { SuggestionPageComponent } from './suggestion-page/suggestion-page.component';
import { PreviewPageComponent } from './preview-page/preview-page.component';

@NgModule({
  declarations: [
    AppComponent,
    TicketBookingFormComponent,
    SuggestionPageComponent,
    PreviewPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
