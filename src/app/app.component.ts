import {Component, OnInit} from '@angular/core';
import {AppService} from './app.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public someObject: any;

  constructor(private appService: AppService) { }

  ngOnInit(){
    this.appService.getJSON().subscribe(data => {
      if (data !== null) {
        this.someObject = data;
      }
    });
  }


}
