import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
  @Input() projectUrl:string;

  constructor(private router: Router) { }

  ngOnInit(): void {
    console.log(this.projectHeading)
    console.log(this.projectUrl)
  }

  redirect(url:string){
    console.log(url)
    window.location.href= url
    // this.router.navigateByUrl(url)
  }

}
