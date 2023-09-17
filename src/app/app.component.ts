import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';


type CustomDirection = "ltr" | "rtl" | "auto" | null;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Assentify';
  itemClicked: boolean = false;

  sidebar: boolean = false;

  sidebarOnEmit(data: boolean) {
    this.sidebar = data;
  }
  
}
