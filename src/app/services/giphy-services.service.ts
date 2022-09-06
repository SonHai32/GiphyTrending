import { environment } from './../../environments/environment';
import { GiphyResponse } from './../models/giphy-response.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Gif } from '../models/gif.model';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GiphyService {
  private readonly GIF_LIMIT = 50;
  private readonly DEFAULT_GIF_OFFSET = 0;
  private readonly SEARCH_GIF_LIMIT = 25;
  private readonly GIPHY_API_URL = environment.giphyUrl;
  private readonly GIPHY_API_KEY = environment.giphyAPIKey;

  constructor(private readonly http: HttpClient) {}

  getGifTrending(offset = this.DEFAULT_GIF_OFFSET, limit = this.GIF_LIMIT) {
    return this.http.get<GiphyResponse>(this.GIPHY_API_URL + '/trending', {
      params: { api_key: this.GIPHY_API_KEY, offset: offset * limit, limit },
    });
  }

  searchGif(keyword: string) {
    return this.http.get<GiphyResponse>(this.GIPHY_API_URL + '/search', {
      params: {
        api_key: this.GIPHY_API_KEY,
        q: keyword,
        lang: 'en',
        limit: this.SEARCH_GIF_LIMIT,
      },
    });
  }

  getGifById(id: string): Observable<Gif> {
    return this.http
      .get<any>(this.GIPHY_API_URL + '/' + id, {
        params: { api_key: this.GIPHY_API_KEY },
      })
      .pipe(map((res) => res.data as Gif));
  }
}
