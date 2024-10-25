import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  darkstate:number=0
  darkbool:boolean=true
  darktheme(){
    this.darkstate++
    if(this.darkstate==1){
      this.darkbool=false
    }
    else{
      this.darkstate=0
      this.darkbool=true
    }

  }

}
