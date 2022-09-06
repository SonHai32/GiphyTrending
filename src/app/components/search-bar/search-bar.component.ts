import { Gif } from './../../models/gif.model';
import { Component, OnInit } from '@angular/core';
import { GiphyService } from 'src/app/services/giphy-services.service';
import { take } from 'rxjs';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent implements OnInit {
  private readonly EMPTY_STRING = '';

  searchGifItems: Gif[] = [];
  isSearching = false;
  isSearchValueEmpty = true;
  isSearchError = false;
  isNoSearchResult = true;

  constructor(private readonly giphyService: GiphyService) {}

  ngOnInit(): void {}
  handleSearchChange(value: string) {
    this.isSearchValueEmpty = value === this.EMPTY_STRING;
    if (this.isSearchValueEmpty) {
      this.searchGifItems = [];
      this.isNoSearchResult = true;
      return;
    }

    this.isSearching = true;
    this.giphyService
      .searchGif(value)
      .pipe(take(1))
      .subscribe({
        next: (val) => {
          this.searchGifItems = val.data;
          this.isNoSearchResult = this.searchGifItems.length === 0;
          this.isSearching = false;
        },
        error: (error) => {
          this.isSearching = false;
          this.isSearchError = true;
        },
      });
  }
}
