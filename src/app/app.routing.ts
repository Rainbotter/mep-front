import {NgModule} from '@angular/core';
import {CommonModule,} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule, Routes} from '@angular/router';

import {DashboardComponent} from './dashboard/dashboard.component';
import {AddComponent} from './add/add.component';
import {InProgressComponent} from './in-progress/in-progress.component';
import {ArchivesComponent} from './archives/archives.component';

const routes: Routes = [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'add', component: AddComponent },
    { path: 'in-progress', component: InProgressComponent },
    { path: 'archives', component: ArchivesComponent }
];

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ],
})

export class AppRoutingModule {
}
