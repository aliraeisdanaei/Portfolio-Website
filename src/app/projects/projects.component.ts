import { fade } from './../animations'
import { Component, OnInit } from '@angular/core';
import * as projects from './projects.json';

@Component({
  selector: 'projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],

  animations: [
    fade
    
  ]
})
export class ProjectsComponent implements OnInit {

  constructor() { }
  // // public projectsList: {name:String, languages: String, description: String, link:String}[] = projects;
  // public projects = projects;


  projectsList: any=[{
    name: "Erika",
    languages: "C++",
    description: "Complier, Lexer",
    link: "https://github.com/aliraeisdanaei/Erika",
    pic: "c++.svg"
}, {
    name: "Linux Utilities",
    languages: "Bash",
    description: "Bash scripts and a bunch of other stuff",
    link: "https://github.com/aliraeisdanaei/i3",
    pic: "linux.png"

}, {
    name: "Portfolio Website",
    languages: "Angular, Typescript, HTML, CSS",
    description: "Created portfolio website",
    link: "https://github.com/aliraeisdanaei/Portfolio-Website",
    pic: "angular.png"
}];



  ngOnInit(): void {
  }

}
