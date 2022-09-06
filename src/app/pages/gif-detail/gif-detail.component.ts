import { Gif } from './../../models/gif.model';
import { GiphyService } from 'src/app/services/giphy-services.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { exhaustMap, map, mergeMap, Subscription } from 'rxjs';

@Component({
  selector: 'app-gif-detail',
  templateUrl: './gif-detail.component.html',
  styleUrls: ['./gif-detail.component.scss'],
})
export class GifDetailComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private giphyService: GiphyService
  ) {}
  gifDetail!: Gif;

  animateIconPath = {
    facebook: {
      option: {
        path: '../../../assets/icons/facebook.json',
      },
    },
    ins: {
      option: {
        path: '../../../assets/icons/instagram.json',
      },
    },
    twitter: {
      option: {
        path: '../../../assets/icons/twitter.json',
      },
    },
    pinterest: {
      option: {
        path: '../../../assets/icons/pinterest.json',
      },
    },
    link: {
      option: {
        path: '../../../assets/icons/test.json',
      },
    },
  };
  subscriptions = new Subscription();
  ngOnInit(): void {
    this.route.paramMap
      .pipe(
        mergeMap((param) => {
          const id = param.get('id');
          if (id) return this.giphyService.getGifById(id);
          else throw new Error('No id');
        })
      )
      .subscribe((val) => {
        console.log(val);
        this.gifDetail = val;
      });
  }
}
