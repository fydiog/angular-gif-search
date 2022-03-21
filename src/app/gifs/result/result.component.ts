import { Component } from '@angular/core';
import { GifService } from '../services/gif.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styles: []
})
export class ResultComponent {


  get results(){
    return this.gifService.results;
  }

  constructor(private gifService:GifService) {
   }

  

}
