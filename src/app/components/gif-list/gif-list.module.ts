import { RouterModule } from '@angular/router';
import { CardGradientModule } from './../base/card-gradient/card-gradient.module';
import { LoadingModule } from './../loading/loading.module';
import { ScrollEventModule } from './../../directives/scroll-event/scroll-event.module';
import { CardModule } from './../base/card/card.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GifListComponent } from './gif-list.component';

@NgModule({
  declarations: [GifListComponent],
  imports: [CommonModule, CardModule, ScrollEventModule, LoadingModule, CardGradientModule, RouterModule],
  exports: [GifListComponent],
})
export class GifListModule {}
