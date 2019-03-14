import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})

export class Tab1Page {

  private cardContent: any[] = [];

  constructor(private http: HttpClient) {
    this.http.get('http://www.donaldduck.api.io', {responseType: 'json'}).subscribe((data: any[]) => {
        // console.log(data);
        this.cardContent = data;
    });
  }

}
