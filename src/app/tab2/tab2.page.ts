import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// Het maken van een interface
interface omdbapiObject {
  Search: object[];
  totalResults: number;
  Response: boolean;
}

@Component({
  selector: 'app-tab2',
  templateUrl: './tab2.page.html',
  styleUrls: ['./tab2.page.scss'],
})
export class Tab2Page implements OnInit {

  omdbContent: object[] = [];

  url_omdb: string = 'http://www.omdbapi.com/?s=';
  search_keyword: string = "tarzan";
  apikey: string = '&apikey=47911a2a';


  constructor(private http: HttpClient) {
    // console.log(this.url_omdb + this.search_keyword + this.apikey);    
    this.fetch_data_from_api();
  }
  
  // Deze method (function) wordt aangeroepen door het drukken op de knop
  search() {
    var search_word: HTMLElement = document.getElementById("inputSearch");
    this.search_keyword = (<HTMLInputElement>search_word).value;
    this.fetch_data_from_api();
  }

  // Deze method zorgt voor het ophalen van de data van de omdbap.com site
  fetch_data_from_api() {
    this.http.get(this.url_omdb + this.search_keyword + this.apikey, {responseType: 'json'}).subscribe((data: omdbapiObject) => {
      console.log(data);
      this.omdbContent = data.Search;
    });
  }

  ionBarSearch() {
    console.log("Hoi");
  }

  ngOnInit() {
  }

}
