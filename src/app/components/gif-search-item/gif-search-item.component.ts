import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-gif-search-item',
  templateUrl: './gif-search-item.component.html',
  styleUrls: ['./gif-search-item.component.scss'],
})
export class GifSearchItemComponent implements OnInit {
  @Input('imageUrl') imageUrl!: string;
  @Input('imageTitle') imageTitle!: string;
  @Input('id') id!: string;
  constructor() {}

  ngOnInit(): void {}
}
