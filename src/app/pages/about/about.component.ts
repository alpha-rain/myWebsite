import { Component, OnInit } from '@angular/core';
import { ParallaxConfig } from 'ngx-parallax';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  parallaxConfig: ParallaxConfig = {
    initialValue: -100,
    ratio: .7
};

  constructor() { }

  ngOnInit() {
  }

}
