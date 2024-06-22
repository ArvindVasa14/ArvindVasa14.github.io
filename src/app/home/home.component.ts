import { Component, OnInit } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import { AreasOfInterest } from 'AreasOfInterest';
import { MyLatestProjects } from 'MyLatestProjects';
import { PdfDownloadService } from '../pdf-download-service.service';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import { CommanServiceService } from '../comman-service.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  
  areasOfIntrests: AreasOfInterest[]= [];

  myLatestProjects: MyLatestProjects[]= [];


  constructor(private service:PdfDownloadService, private comman_service:CommanServiceService) { }

  ngOnInit(): void {
    this.comman_service.getProjectsData().subscribe(
      data => {
        this.myLatestProjects= data
        // console.log(data)
        // console.log(this.myLatestProjects)
      },
      error => {
        console.log("Error fetching json data", error)
      }
    );

    this.comman_service.getIntrestsData().subscribe(
      data => {
        this.areasOfIntrests= data
        // console.log(data)
        console.log(this.areasOfIntrests)
      },
      error => {
        console.log("Error fetching json data", error)
      }
    );
  }


  downloadPdf(): void {
    this.service.downloadPdf().subscribe((data: Blob) => {
      const blob = new Blob([data], { type: 'application/pdf' });
      const url = window.URL.createObjectURL(blob);
      window.open(url); 
    });
  }

  redirect(url:string){
    console.log(url)
    window.location.href= url
    // this.router.navigateByUrl(url)
  }

}
