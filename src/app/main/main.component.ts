import { Component, OnInit } from '@angular/core';
import { gsap } from 'gsap';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const timeline = gsap.timeline({ defaults:{duration : 1}})
timeline
  .from('h1',{x: '-100%',ease : 'bounce'})
  .from('h2',{y: '-100%',ease : 'bounce'})
  .from('.thumb-wrapper',{x: 160,stagger:0.1,ease : "back"})
  }

}
