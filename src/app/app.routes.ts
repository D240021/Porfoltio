import { provideRouter, withHashLocation, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home/home.component';
import { ProjectsComponent } from './pages/projects/projects/projects.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'projects', component: ProjectsComponent }
];


export const appRoutingProviders = [
    provideRouter(routes, withHashLocation())
];