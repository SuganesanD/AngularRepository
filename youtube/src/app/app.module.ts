import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ContainerComponent } from './container/container.component';
import { VideoContainerComponent } from './container/video-container/video-container.component';
import { SideContainerComponent } from './container/side-container/side-container.component';
import { MenuComponent } from './navbar/menu/menu.component';
import { SearchbarComponent } from './navbar/searchbar/searchbar.component';
import { ProfileComponent } from './navbar/profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ContainerComponent,
    VideoContainerComponent,
    SideContainerComponent,
    MenuComponent,
    SearchbarComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
