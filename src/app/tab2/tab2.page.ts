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
  search_keyword: string = "chainsaw";
  apikey: string = '&apikey=47911a2a';


  constructor(private http: HttpClient) {
    console.log(this.url_omdb + this.search_keyword + this.apikey);
    
    this.http.get(this.url_omdb + this.search_keyword + this.apikey, {responseType: 'json'}).subscribe((data: omdbapiObject) => {
      console.log(data);
      this.omdbContent = data.Search;
    });
  }
  
  search() {
    var search_word = document.getElementById("inputSearch").value;
    console.log("Hoi" + search_word);
    this.search_keyword = search_word;

  }

  ngOnInit() {
  }

}
