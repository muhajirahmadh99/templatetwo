import { Component, OnInit } from '@angular/core';
import { gsap } from 'gsap';

@Component({
  selector: 'app-kids',
  templateUrl: './kids.component.html',
  styleUrls: ['./kids.component.scss']
})
export class KidsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const timeline = gsap.timeline({ defaults:{duration : 0.8}})
    timeline
      .from('h2',{x: '-100%',ease : 'bounce'})
      .from('.thumb-wrapper',{x: 160,stagger:0.1,ease : "back"})
  }

}
