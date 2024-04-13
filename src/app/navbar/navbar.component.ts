import { Component, OnInit } from '@angular/core';
import { PdfDownloadService } from '../pdf-download-service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private service:PdfDownloadService) { }

  ngOnInit(): void {
  }

  downloadPdf(): void {
    this.service.downloadPdf().subscribe((data: Blob) => {
      const blob = new Blob([data], { type: 'application/pdf' });
      const url = window.URL.createObjectURL(blob);
      window.open(url); // Opens the PDF in a new browser tab
      // Alternatively, you can trigger a download by creating an anchor element
      // const anchor = document.createElement('a');
      // anchor.href = url;
      // anchor.download = 'sample.pdf';
      // anchor.click();
    });
  }

}
