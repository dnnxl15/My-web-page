import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './components/about/about.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { CreateComponent } from './components/create/create.component';
import { ContactComponent } from './components/contact/contact.component';
import { ErrorComponent } from './components/error/error.component';

const appRoutes: Routes = [
    {path: '', component:AboutComponent},
    {path: 'About-me', component: AboutComponent},
    {path: 'Contact', component: ContactComponent},
    {path: 'Create-project', component: CreateComponent},
    {path: 'Projects', component: ProjectsComponent},
    {path: '**', component: ErrorComponent}
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);