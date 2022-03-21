import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GIFSearchResponse, Gif } from '../interfaces/gif.interface';

@Injectable({
  providedIn: 'root'
})
export class GifService {

  private apiKey:string = 'jSSsXgoRUXNbynyaFji5A3o9IV60OWvg'
  private serviceUrl:string = 'https://api.giphy.com/v1/gifs'
  private _searchHistory: string[] = [];

  public results: Gif[] = [];


  get searchHistory(){
    return [...this._searchHistory]
  }

  constructor(private http:HttpClient){
    this._searchHistory = JSON.parse(localStorage.getItem('searchHistory')!) || [];
    this.results = JSON.parse(localStorage.getItem('results')!) || [];
  }

  searchGifs(query:string){
   
    query = query.trim().toLocaleLowerCase();
 //unshift adds the element to the start of the array,
    //so we can display it in chronological order (most recent first)
    if(!this._searchHistory.includes(query)){
      this._searchHistory.unshift(query);
      this._searchHistory = this._searchHistory.splice(0,10)

      localStorage.setItem('searchHistory', JSON.stringify( this._searchHistory )  );
    }

    const params = new HttpParams()
    .set('api_key', this.apiKey)
    .set('limit', '10')
    .set('q', query)

    this.http.get<GIFSearchResponse>(`${this.serviceUrl}/search`, {params})
      .subscribe((res) =>{
        this.results = res.data
        localStorage.setItem('results', JSON.stringify(this.results))
      })
  }

  clearHistory(){
    this._searchHistory = [];
    localStorage.removeItem('searchHistory');
    localStorage.removeItem('results')

  }
}
