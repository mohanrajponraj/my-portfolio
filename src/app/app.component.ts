import { AfterViewInit, Component, HostListener } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { SideBarComponent } from './side-bar/side-bar.component';
import { ResumeComponent } from './resume/resume.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SideBarComponent, ResumeComponent, HomeComponent, AboutComponent, ContactComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements AfterViewInit {
  title = 'my-portfolio';
  activeComponent: string = 'home';

  sections: { [key in 'home' | 'about' | 'resume' | 'contact']: HTMLElement | null } = {
    home: null,
    about: null,
    resume: null,
    contact: null
  };

  constructor(
    private router: Router
  ) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        // window.scrollTo({ top: 0, behavior: 'smooth' });
        this.setActiveComponent();
      }
    });
  }

  ngAfterViewInit() {
    this.sections.home = document.getElementById('home');
    this.sections.about = document.getElementById('about');
    this.sections.resume = document.getElementById('resume');
    this.sections.contact = document.getElementById('contact');
  }

  setActiveComponent() {
    const url = this.router.url;
    if (url.includes('home')) {
      this.activeComponent = 'home';
    } else if (url.includes('about')) {
      this.activeComponent = 'about';
    } else if (url.includes('resume')) {
      this.activeComponent = 'resume';
    } else if (url.includes('contact')) {
      this.activeComponent = 'contact';
    }
  }


  @HostListener('window:scroll', [])
  onWindowScroll() {
    let foundActiveComponent = false;
    for (const [key, section] of Object.entries(this.sections)) {
      if (section && this.isElementInViewport(section)) {
        this.activeComponent = key;
        foundActiveComponent = true;
        break;
      }
    }
    if (foundActiveComponent) {
      this.setSidebarActiveClass();
    }
  }

  isElementInViewport(el: HTMLElement): boolean {
    const rect = el.getBoundingClientRect();
    const middle = window.innerHeight / 2;
    return rect.top <= middle && rect.bottom >= middle;
  }
  
  setSidebarActiveClass() {
    console.log(`Active component is now: ${this.activeComponent}`);

  
    const sidebarLinks = document.querySelectorAll('.sidebar a');
    sidebarLinks.forEach((link: any) => {
      link.classList.remove('active');
    });

    
    const activeLink = document.querySelector(`a[href="/${this.activeComponent}"]`);
    if (activeLink) {
      activeLink.classList.add('active');
    }
  }

  // OnSidebar(){
  //   this.router.navigate(['side-bar'])
  // }
}
