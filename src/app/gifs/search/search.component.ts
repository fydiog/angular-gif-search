import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifService } from '../services/gif.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent{

  // A new ! post-fix expression operator may be used to assert that its operand is non-null 
  // and non-undefined in contexts where the type checker is unable to conclude that fact.
  // https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-0.html 
  @ViewChild('searchInput') searchInput!:ElementRef<HTMLInputElement>;

  constructor(private gifsService:GifService){

  }
  search(){
    const val = this.searchInput.nativeElement.value

    if (val.trim().length === 0){
      return;
    }

    this.gifsService.searchGifs(val)
    
  } 

}
