import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Assentify';
  itemClicked: boolean = false;

  constructor(private router:Router){}

  menulist = [
    {
      text: 'Dashboard',
      route: 'Dashboard',
      icon:'dashboard'
    },
    {
      text: 'Interactions',
      route: 'Interactions',
      icon:'contract_edit'
    },
    {
      text: 'Clients',
      route: 'Clients',
      icon:'groups'
    },
    {
      text: 'Documents',
      route: 'Documents',
      icon:'description'
    },
    {
      text: 'Flow Builder',
      route: 'Flow Builder',
      icon:'key_visualizer'
    },
    {
      text: 'Digital Service',
      route: 'Digital Service',
      icon:'memory'
    },
    {
      text: 'Settings',
      route: 'Settings',
      icon:'settings'
    },
  ]

  sidebar: boolean = false;

  sidebarOnEmit(data: boolean) {
    this.sidebar = data;
  }
  
  navigate(route: string) {
    this.router.navigate([route]);
  
  }
}
