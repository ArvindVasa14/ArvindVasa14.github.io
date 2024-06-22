// pdf-download.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PdfDownloadService {

  constructor(private http: HttpClient) { }

  downloadPdf(): Observable<Blob> {
    // Replace 'assets/sample.pdf' with the path to your PDF file in the assets folder
    return this.http.get('assets/vasa venkata aravind resume v11.pdf', { responseType: 'blob' });
  }

  
}
