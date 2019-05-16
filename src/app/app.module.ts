import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';


import {AppRoutingModule} from './app.routing';
import {ComponentsModule} from './components/components.module';

import {AppComponent} from './app.component';

import {DashboardComponent} from './dashboard/dashboard.component';
import {AddComponent} from './add/add.component';
import {InProgressComponent} from './in-progress/in-progress.component';
import {ArchivesComponent} from './archives/archives.component';

import {HttpClientModule} from '@angular/common/http';
import {CommonModule} from '@angular/common';
import {MatButtonModule, MatFormFieldModule, MatInputModule, MatRippleModule, MatSelectModule, MatTooltipModule} from '@angular/material';


@NgModule({
    imports: [
        BrowserAnimationsModule,
        FormsModule,
        HttpClientModule,
        ComponentsModule,
        AppRoutingModule,
        CommonModule,
        FormsModule,
        MatButtonModule,
        MatRippleModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatTooltipModule
    ],
    declarations: [
        AppComponent,
        DashboardComponent,
        AddComponent,
        InProgressComponent,
        ArchivesComponent
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
