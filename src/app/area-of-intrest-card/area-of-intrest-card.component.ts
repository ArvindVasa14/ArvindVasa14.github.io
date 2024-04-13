import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-area-of-intrest-card',
  templateUrl: './area-of-intrest-card.component.html',
  styleUrls: ['./area-of-intrest-card.component.css']
})
export class AreaOfIntrestCardComponent implements OnInit {

  @Input() technologyImageurl: string;
  @Input() technologyName: string;
  @Input() technologyDescription: string;
  
  constructor() { }

  ngOnInit(): void {
    console.log("I am Loggin",this.technologyName)
  }

}
