import { provideRouter, withHashLocation, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home/home.component';
import { ProjectsComponent } from './pages/projects/projects/projects.component';
import { AboutComponent } from './pages/about/about/about.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'projects', component: ProjectsComponent },
    { path: 'about', component: AboutComponent }
];


export const appRoutingProviders = [
    provideRouter(routes, withHashLocation())
];