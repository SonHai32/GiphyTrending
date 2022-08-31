import { LoadingModule } from './../loading/loading.module';
import { ScrollEventModule } from './../../directives/scroll-event/scroll-event.module';
import { CardModule } from './../base/card/card.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GifListComponent } from './gif-list.component';

@NgModule({
  declarations: [GifListComponent],
  imports: [CommonModule, CardModule, ScrollEventModule, LoadingModule],
  exports: [GifListComponent],
})
export class GifListModule {}
