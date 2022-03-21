import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GifPageComponent } from './gif-page/gif-page.component';
import { SearchComponent } from './search/search.component';
import { ResultComponent } from './result/result.component';

@NgModule({
  declarations: [
    GifPageComponent,
    SearchComponent,
    ResultComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    GifPageComponent
  ]
})
export class GifsModule { }
