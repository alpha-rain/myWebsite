import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';

import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
const APP_ROUTES: Routes = [
    {path: 'Contact', component: ContactComponent},
    {path: 'About', component: AboutComponent},
    // {path: 'Projects', component:ProjectsComponent},
    // {path: 'Resume', component:ResumeComponent},
    {path: '', component: AboutComponent, pathMatch: 'full'},
    {path: '**', component: AboutComponent}
];

export const routing = RouterModule.forRoot(APP_ROUTES);
