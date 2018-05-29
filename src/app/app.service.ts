import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) {
    this.getJSON().subscribe(data => {
    }, error => {
      alert('error was occurs when trying to get json object.');
    });
  }

  public getJSON(): Observable<any> {
    return this.http.get('./assets/jsonFile.json');
  }
}
