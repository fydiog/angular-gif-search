import { Component } from '@angular/core';
import { GifService } from '../../gifs/services/gif.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [`
  #sidebar-menu {
    height: 100%;
    min-height: 100vh;
    min-width: 280px;
  }
  `
]
})
export class SidebarComponent {

  get searchHistory(){
    return this.gifService.searchHistory;
  }


  constructor(private gifService : GifService) { 

    console.log(this.searchHistory)
  }

  
  search( keyword:string ){
    console.log('keyword')
    this.gifService.searchGifs(keyword)
  }

  clear(){
    this.gifService.clearHistory();
  }

}
