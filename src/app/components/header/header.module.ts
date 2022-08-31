import { HeaderComponent } from './header.component';
import { NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputModule } from '../base/input/input.module';
import { SearchBarModule } from '../search-bar/search-bar.module';

@NgModule({
  declarations: [HeaderComponent],
  imports: [CommonModule, InputModule, SearchBarModule],
  exports: [HeaderComponent],
})
export class HeaderModule {}
