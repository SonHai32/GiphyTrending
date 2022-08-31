import { GifSearchItemModule } from './../gif-search-item/gif-search-item.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchBarComponent } from './search-bar.component';
import { InputModule } from '../base/input/input.module';

@NgModule({
  declarations: [SearchBarComponent],
  imports: [CommonModule, InputModule, GifSearchItemModule],
  exports: [SearchBarComponent],
})
export class SearchBarModule {}
