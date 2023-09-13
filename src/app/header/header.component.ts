import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  sidebarOpened: boolean = false;
  @Output() sidebar: EventEmitter<boolean> = new EventEmitter<boolean>()

  sidebarEmitted() {
    this.sidebarOpened = !this.sidebarOpened;
    this.sidebar.emit(this.sidebarOpened);
  }
}
