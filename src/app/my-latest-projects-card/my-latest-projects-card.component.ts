import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-latest-projects-card',
  templateUrl: './my-latest-projects-card.component.html',
  styleUrls: ['./my-latest-projects-card.component.css']
})
export class MyLatestProjectsCardComponent implements OnInit {

  @Input() projectImageUrl:string;
  @Input() projectDate:string;
  @Input() projectHeading:string;
  @Input() projectDescription:string;

  constructor() { }

  ngOnInit(): void {
    console.log("I am Logging",this.projectHeading)
  }

}
