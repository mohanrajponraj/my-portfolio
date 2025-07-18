import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { SideBarComponent } from './side-bar/side-bar.component';
import { ResumeComponent } from './resume/resume.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SideBarComponent, ResumeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-portfolio';

  constructor(
    private router: Router
  ){}

  // OnSidebar(){
  //   this.router.navigate(['side-bar'])
  // }
}
