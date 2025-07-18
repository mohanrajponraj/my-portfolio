import { Routes } from '@angular/router';
import { SideBarComponent } from './side-bar/side-bar.component';
import { ContactComponent } from './contact/contact.component';
import { ResumeComponent } from './resume/resume.component';

export const routes: Routes = [
    {path: 'side-bar', component: SideBarComponent},
    {path: 'contact', component: ContactComponent},
    {path: 'resume', component: ResumeComponent},
    {path: 'home', loadChildren:()=> import('./home/home.module').then(m=> m.HomeModule)}
];
