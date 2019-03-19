import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tab2',
  templateUrl: './tab2.page.html',
  styleUrls: ['./tab2.page.scss'],
})
export class Tab2Page implements OnInit {

  omdbContent: object[] = [];

  url_omdb: string = 'http://www.omdbapi.com/?t=';
  search_keyword: string = "Titanic";
  apikey: string = '&apikey=47911a2a';


  constructor(private http: HttpClient) { 
    this.http.get(this.url_omdb + this.search_keyword + this.apikey, {responseType: 'json'}).subscribe((data: any[]) => {
      console.log(data);
      this.omdbContent[0] = data;
    });
  }

  ngOnInit() {
  }

}
