import { Component, OnInit } from '@angular/core';
import * as projects from './projects.json';

@Component({
  selector: 'projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  constructor() { }
  projectsList: any = projects;

  ngOnInit(): void {
  }

}
