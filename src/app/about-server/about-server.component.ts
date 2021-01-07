import { fade } from './../animations'

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'about-server',
  templateUrl: './about-server.component.html',
  styleUrls: ['./about-server.component.css'],
  
  animations: [
    fade
    
  ]
})
export class AboutServerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
