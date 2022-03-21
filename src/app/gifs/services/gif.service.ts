import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GIFSearchResponse, Gif } from '../interfaces/gif.interface';

@Injectable({
  providedIn: 'root'
})
export class GifService {

  private apiKey:string = 'jSSsXgoRUXNbynyaFji5A3o9IV60OWvg'
  private _searchHistory: string[] = [];
  public results:Gif[] = []

  get searchHistory(){
    return [...this._searchHistory]
  }

  constructor(private http:HttpClient){
    
  }

  searchGifs(query:string){
    //unshift adds the element to the start of the array,
    //so we can display it in chronological order (most recent first)
    query = query.toLowerCase();
    if(!this._searchHistory.includes(query)){
      this._searchHistory.unshift(query);
      this._searchHistory = this._searchHistory.splice(0,10)
    }

    this.http.get<GIFSearchResponse>(`https://api.giphy.com/v1/gifs/search?api_key=${this.apiKey}&q=${query}&limit=10`)
      .subscribe((res) =>{
        this.results = res.data
      })


    
  }
}
