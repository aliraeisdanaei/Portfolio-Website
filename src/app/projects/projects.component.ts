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

  linuxLink: any =[{
    name: "i3 Window Manager, Dynamic Background, Brightness Controller, Low Battery Reminder, & 20-20-20 Reminder",
    link: "https://github.com/aliraeisdanaei/i3"
  }
,{
  name: "Apple Photo-format Converter",
  link: "https://github.com/aliraeisdanaei/photo-tools"
},{
  name: "Punch Timer",
  link: "https://github.com/aliraeisdanaei/punch"
}];


  projectsList: any=[{
    name: "Erika Compiler",
    languages: "C++",
    description: "Creating a toy coding language is as fun as learning a language. I set out to create a simple coding language from scratch using C++. This project includes a lexer, a parser, and a compiler that converts Erika into LLVM IR. Advanced understanding of data structures, and compiler design was needed to start this project. This project is still in progress.",
    link: "https://github.com/aliraeisdanaei/Erika",
    pic: "c++.svg"
}, {
    name: "Linux Utilities",
    languages: "Bash",
    description: "I believe in the power of Linux and preach its good word to everyone I meet. Of course, the good thing about Linux is its customizability, so from the very beginning, I set out to create a unique experience of computing. Desktop environments require too many resources; I use a bare-bone server distro with a lightweight tiling window manager: i3. To get daily utility, I have had to write countless config files, and critical and reliable scripts. These include a script for a dynamic background, a brightness controller, low battery reminder, and a 20-20-20 rule reminder. Other scripts that solve daily problems include a punch in program to time the productive hours spent behind the machine and a useful apple photo converter that converts unviewable apple photo formats and live photos to jpeg. ",
    linuxLink: true,
    pic: "linux.png"

}, {
    name: "Portfolio Website & Web Server",
    languages: "Angular, Typescript, HTML, CSS, Apache2",
    description: "A man is as good as his website… so they seem to say. I needed a good website to showcase some of the projects that I had worked on. I used Angular and typescripting to design and build such a work, and I made sure it was simple but elegant. To host the website live, I created a web server with my own computer using Apache2. This gave me a thorough understanding of the internet.",
    link: "https://github.com/aliraeisdanaei/Portfolio-Website",
    pic: "angular.png"
},
{
  name: "Netflix Movie Suggester",
  languages: "Python",
  description: "I have spent many a good hour with my friend oblivious of good content on Netflix. A trusty web-scraper built to give exhaustive suggestions based on user profiles was its solution. It was built using Python and works with a text user interface. Users can create profiles or change their criterion within the interface to find the perfect movie. The code was written in modular format to allow for future addition of a graphical user interface. ",
  link: "https://github.com/aliraeisdanaei/NetflixMovieSuggester",
  pic: "python.png"
}];



  ngOnInit(): void {
  }

}
