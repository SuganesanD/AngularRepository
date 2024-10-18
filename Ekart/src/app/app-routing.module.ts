import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { LandingpageComponent } from './landingpage/landingpage.component';

const routes: Routes = [
  { path:'',component:LandingpageComponent},
  {path:'search',component:SearchComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
