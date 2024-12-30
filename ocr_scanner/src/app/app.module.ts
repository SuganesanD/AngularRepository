import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

import { RouterModule } from '@angular/router';  // Import RouterModule
import { routes } from './app.routes';  // Import routes from app.routes.ts

@NgModule({
  declarations: [
    AppComponent, 
     // Declare your components here
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),  // Set up routing
  ],
  providers: [],
  bootstrap: [AppComponent]  // Bootstrap the root component
})
export class AppModule { }
