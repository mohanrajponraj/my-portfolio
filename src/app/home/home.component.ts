import { ViewportScroller } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
 @Input() activeComponent: string = ''
  constructor(private router: Router, private scroller: ViewportScroller,) { }

  ngOnInit(): void {

  }

  onSidebarClick(component: string) {
    this.router.navigate([`/${component}`]).then(() => {
      setTimeout(() => {
        this.scrollToComponent(component); 
      }, 0);  
    });
  }

  scrollToComponent(component: string) {
    const element = document.getElementById(component);
    if (element) {
      this.scroller.scrollToPosition([0, element.offsetTop]);
    }
  }

}
