import { Gif } from './../../models/gif.model';
import { Component, OnInit } from '@angular/core';
import { GiphyService } from 'src/app/services/giphy-services.service';

@Component({
  selector: 'app-gif-list',
  templateUrl: './gif-list.component.html',
  styleUrls: ['./gif-list.component.scss'],
})
export class GifListComponent implements OnInit {
  constructor(private giphyService: GiphyService) {}
  pageOffset = 0;
  listGif: Gif[] = [];
  isLoading = false;

  ngOnInit(): void {
    this.getGifs();
  }

  getGifs(offset: number = 0): void {
    this.isLoading = true;
    this.giphyService.getGifTrending(offset).subscribe({
      next: (val) => {
        this.listGif = this.listGif.concat(val.data);
        this.isLoading = false;
      },
      error: (error) => {
        this.isLoading = false;
      },
    });
  }

  handleScrollBottom(): void {
    if (this.listGif.length > 0) {
      this.pageOffset = this.pageOffset + 1;
      this.getGifs(this.pageOffset);
    }
  }
}
