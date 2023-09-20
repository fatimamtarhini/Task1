import { RouterModule,Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { InteractionsComponent } from './interactions/interactions.component';
import { ClientsComponent } from './clients/clients.component';
import { DocumentsComponent } from './documents/documents.component';
import { FlowBuilderComponent } from './flow-builder/flow-builder.component';
import { DigitalServiceComponent } from './digital-service/digital-service.component';
import { SettingsComponent } from './settings/settings.component';
import { ErrorComponent } from './error/error.component';
import { NgModule } from '@angular/core';


const appRoute: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'Dashboard', component: DashboardComponent },
  { path: 'Interactions', component: InteractionsComponent },
  { path: 'Clients', component: ClientsComponent },
  { path: 'Documents', component: DocumentsComponent },
  { path: 'Flow Builder', component: FlowBuilderComponent },
  { path: 'Digital Service', component: DigitalServiceComponent },
  { path: 'Settings', component: SettingsComponent },
  { path: '**', component: ErrorComponent }
]

@NgModule({
    imports: [
    RouterModule.forRoot(appRoute)
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule{
    
}