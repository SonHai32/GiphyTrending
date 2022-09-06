import { CardGradientModule } from './../base/card-gradient/card-gradient.module';
import { NoResultModule } from './../no-result/no-result.module';
import { ErrorResultModule } from './../error-result/error-result.module';
import { LoadingModule } from './../loading/loading.module';
import { GifSearchItemModule } from './../gif-search-item/gif-search-item.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchBarComponent } from './search-bar.component';
import { InputModule } from '../base/input/input.module';

@NgModule({
  declarations: [SearchBarComponent],
  imports: [
    CommonModule,
    InputModule,
    GifSearchItemModule,
    LoadingModule,
    ErrorResultModule,
    NoResultModule,
    CardGradientModule
  ],
  exports: [SearchBarComponent],
})
export class SearchBarModule {}
