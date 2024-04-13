import { Component, OnInit } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import { AreasOfInterest } from 'AreasOfInterest';
import { MyLatestProjects } from 'MyLatestProjects';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  
  areasOfIntrests: AreasOfInterest[]= [
    new AreasOfInterest("Machine Learning", "Machine learning is more than an API call to sci-kit learn. I love the math and theory as well as the implementation", "assets/machine learning.jpeg"),
    new AreasOfInterest("Web Development", "Machine learning is more than an API call to sci-kit learn. I love the math and theory as well as the implementation", "assets/web development.png"),
    new AreasOfInterest("Machine Learning", "Machine learning is more than an API call to sci-kit learn. I love the math and theory as well as the implementation", "assets/machine learning.jpeg"),
    new AreasOfInterest("Web Development", "Machine learning is more than an API call to sci-kit learn. I love the math and theory as well as the implementation", "assets/web development.png"),
    new AreasOfInterest("Machine Learning", "Machine learning is more than an API call to sci-kit learn. I love the math and theory as well as the implementation", "assets/machine learning.jpeg"),
    new AreasOfInterest("Web Development", "Machine learning is more than an API call to sci-kit learn. I love the math and theory as well as the implementation", "assets/web development.png"),
    
  
  ]

  myLatestProjects: MyLatestProjects[]= [
    new MyLatestProjects('assets/RecommendationEngine.png', '2022-04-20', 'Project 1', 'Description of the project.'),
    new MyLatestProjects('assets/bert.jpeg', '2022-04-20', 'Project 2', 'Description of the project.'),
    new MyLatestProjects('assets/RecommendationEngine.png', '2022-04-20', 'Project 1', 'Description of the project.'),
    new MyLatestProjects('assets/bert.jpeg', '2022-04-20', 'Project 2', 'Description of the project.')
  
  ]


  constructor() { }

  ngOnInit(): void {
  }

}
