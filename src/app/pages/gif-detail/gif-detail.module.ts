import { CardGradientModule } from './../../components/base/card-gradient/card-gradient.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GifDetailComponent } from './gif-detail.component';
import player from 'lottie-web';
import { LottieModule } from 'ngx-lottie';
import { RouterModule } from '@angular/router';

export function playerFactory() {
  return player;
}
@NgModule({
  declarations: [GifDetailComponent],
  imports: [
    CommonModule,
    CardGradientModule,
    RouterModule,
    LottieModule.forRoot({ player: playerFactory }),
  ],
  exports: [GifDetailComponent],
})
export class GifDetailModule {}
