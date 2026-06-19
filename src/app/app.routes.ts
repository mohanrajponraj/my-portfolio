import { Routes } from '@angular/router';
import { SideBarComponent } from './side-bar/side-bar.component';
import { ContactComponent } from './contact/contact.component';
import { ResumeComponent } from './resume/resume.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    // { path: "", component: ContactComponent },
    // { path: 'side-bar', component: SideBarComponent },
    // { path: 'contact', component: ContactComponent },
    // { path: 'resume', component: ResumeComponent },
    // { path: 'about', component: AboutComponent },
    // { path: 'home', component: HomeComponent }

    { path: '', redirectTo: '/home', pathMatch: 'full' }, 
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'resume', component: ResumeComponent },
    { path: 'contact', component: ContactComponent }

];
