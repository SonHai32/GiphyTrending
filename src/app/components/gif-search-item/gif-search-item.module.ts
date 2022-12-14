import { RouterModule } from '@angular/router';
import { GifSearchItemComponent } from './gif-search-item.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [GifSearchItemComponent],
  imports: [CommonModule, RouterModule],
  exports: [GifSearchItemComponent],
})
export class GifSearchItemModule {}
