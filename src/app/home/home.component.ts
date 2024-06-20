import { Component, OnInit } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import { AreasOfInterest } from 'AreasOfInterest';
import { MyLatestProjects } from 'MyLatestProjects';
import { PdfDownloadService } from '../pdf-download-service.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  
  areasOfIntrests: AreasOfInterest[]= [
    new AreasOfInterest("Natural Language Processing", "In my extensive work with NLP, leveraging state-of-the-art techniques such as transformers and BERT, I've optimized language understanding tasks, achieving higher accuracy and efficiency in various applications. ", "assets/NLP.jpg"),
    new AreasOfInterest("Machine Learning", "Machine learning is more than an API call to sci-kit learn. I love the math and theory as well as the implementation. developed robust models that predict with high accuracy and leveraging advanced algorithms.", "assets/machine learning.jpeg"),
    new AreasOfInterest("Web Development", "I've honed my skills in building robust, scalable web applications using Java, Spring Boot, Angular, and RESTful APIs. My expertise includes seamless integration of front-end and back-end technologies.", "assets/web development.png"),
    new AreasOfInterest("Python", "working with python from my graduation days almost 4 years, I grasped an immense amount of knowledge on Python. I love using python", "assets/web development.png"),
    new AreasOfInterest("Angular", "Angular is my first choice for any frontend task, it became so addictive for me. almost spent an year bulding frontends with angular", "assets/machine learning.jpeg"),
    // new AreasOfInterest("Web Development", "Machine learning is more than an API call to sci-kit learn. I love the math and theory as well as the implementation", "assets/web development.png"),
  ]

  myLatestProjects: MyLatestProjects[]= [
    new MyLatestProjects('assets/RecommendationEngine.png', '2022-04-20', 'Neural Machine Translation', 'Machine translation is achived using sequence to sequence model architecture using with and without attention with limitied training produced considerable results', "https://github.com/ArvindVasa14/Neural-Machine-Translation"),
    new MyLatestProjects('assets/RecommendationEngine.png', '2022-04-20', 'Title Generation for article', 'This text generation model generated the title based on the article written, article must be feed as input to get a catchy and suitable title', "https://github.com/ArvindVasa14/T5-finetuned-for-Medium-article-title-generation"),
  ]


  constructor(private service:PdfDownloadService) { }

  ngOnInit(): void {
  }


  downloadPdf(): void {
    this.service.downloadPdf().subscribe((data: Blob) => {
      const blob = new Blob([data], { type: 'application/pdf' });
      const url = window.URL.createObjectURL(blob);
      window.open(url); 
    });
  }

}
