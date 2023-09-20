import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule,Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { InteractionsComponent } from './interactions/interactions.component';
import { ClientsComponent } from './clients/clients.component';
import { DocumentsComponent } from './documents/documents.component';
import { FlowBuilderComponent } from './flow-builder/flow-builder.component';
import { DigitalServiceComponent } from './digital-service/digital-service.component';
import { SettingsComponent } from './settings/settings.component';
import { ErrorComponent } from './error/error.component';
import { AppRoutingModule } from './app-routing.module';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DashboardComponent,
    InteractionsComponent,
    ClientsComponent,
    DocumentsComponent,
    FlowBuilderComponent,
    DigitalServiceComponent,
    SettingsComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatSidenavModule,
    BrowserAnimationsModule,
    MatListModule,
    MatIconModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
