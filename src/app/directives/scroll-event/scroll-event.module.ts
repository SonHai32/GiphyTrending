import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollEventDirective } from '../scroll-event.directive';

@NgModule({
  declarations: [ScrollEventDirective],
  imports: [CommonModule],
  exports: [ScrollEventDirective],
})
export class ScrollEventModule {}
