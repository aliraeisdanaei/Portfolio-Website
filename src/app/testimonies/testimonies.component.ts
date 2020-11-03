import { fade } from './../animations'

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'testimonies',
  templateUrl: './testimonies.component.html',
  styleUrls: ['./testimonies.component.css'],
  animations: [
    fade
    
  ]
})
export class TestimoniesComponent implements OnInit {

  constructor() { }

  testimoniesList: any=[{
    name:"Nobody Yet",
    testimony:"Nothing to say yet."
  }];

  ngOnInit(): void {
  }

}
