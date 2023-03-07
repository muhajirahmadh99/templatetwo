import { Component, OnInit } from '@angular/core';
import { gsap } from 'gsap';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() {
   }

  ngOnInit(): void {
    const timeline = gsap.timeline({ defaults:{duration : 1}})
timeline
  .from('#img',{x: '-100%',ease : 'bounce'})
  .from('.navbar',{x: '-100%',ease : 'bounce'})
  .from(".nav-link", {rotation: -360, x: -100,})
  .from(".btn", {rotation: -360, y: -100,});
  
  


  }

}
