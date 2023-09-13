import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Assentify';

  sidebar: boolean = false;

  sidebarOnEmit(data: boolean) {
    this.sidebar = data;
  }

}
