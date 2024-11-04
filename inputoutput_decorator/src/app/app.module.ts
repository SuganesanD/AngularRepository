import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductcardComponent } from './productcard/productcard.component';
import { ProductcardlistComponent } from './productcardlist/productcardlist.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductcardComponent,
    ProductcardlistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
