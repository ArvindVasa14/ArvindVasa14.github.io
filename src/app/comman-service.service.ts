import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommanServiceService {

  constructor(private http:HttpClient) { }

  getProjectsData(): Observable<any> {
    return this.http.get<any>('assets/myLatestProjects.json'); // Adjust path as per your file location
  }

  getIntrestsData(): Observable<any> {
    return this.http.get<any>('assets/areasOfIntrests.json'); // Adjust path as per your file location
  }
}
