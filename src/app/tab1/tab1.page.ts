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
    this.fetch_data_from_api();
  }

  doRefresh(event) {
    console.log('Begin async operation');
    this.fetch_data_from_api();
    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 1000);
  }

  fetch_data_from_api() {
    this.http.get('http://www.donaldduck.api.io', {responseType: 'json'}).subscribe((data: any[]) => {
        console.log(data);
        this.cardContent = data;
    });
  }


}
