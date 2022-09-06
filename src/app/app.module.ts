import { GifListModule } from './components/gif-list/gif-list.module';
import { HeaderModule } from './components/header/header.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { GifDetailModule } from './pages/gif-detail/gif-detail.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HeaderModule,
    GifListModule,
    GifDetailModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
