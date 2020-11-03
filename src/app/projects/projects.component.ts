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
    description: "Using C++, I am writing my very own programming language. The project includes a lexer that tokenizes the code. A shift reduce parser that creates an excecution tree. Finally, a generator produces LLVM IR code from the excecution tree.",
    link: "https://github.com/aliraeisdanaei/Erika",
    pic: "c++.svg"
}, {
    name: "Linux Utilities",
    languages: "Bash",
    description: "Changing from Windows to a bare distro of Linux was not easy. I was determined to write a customizable computer experience. Using i3, I built many features and key bindings for programs. Through the process, I was able to understand the fundamental principles of Linux and gain deep insight into the legacy programs of Linux. Some of the basic utilities that I have written include, a punch timer, battery reminder, and photo converter.",
    link: "https://github.com/aliraeisdanaei/i3",
    pic: "linux.png"

}, {
    name: "Portfolio Website",
    languages: "Angular, Typescript, HTML, CSS",
    description: "This very website was coded from scratch using Angular. Technical and creative skills were required to put this through.",
    link: "https://github.com/aliraeisdanaei/Portfolio-Website",
    pic: "angular.png"
},
{
  name: "Netflix Movie Suggester",
  languages: "Python",
  description: "Finding a movie to watch on Netflix can be hard. This program seeks to remedy that by scraping the web for all of the current movies running on Netflix and suggesting movies exhaustively based on your preferences. The text based user interface is complete with everything one would need to change their preferences to logging as someone else. ",
  link: "https://github.com/aliraeisdanaei/NetflixMovieSuggester",
  pic: "python.png"
}];



  ngOnInit(): void {
  }

}
