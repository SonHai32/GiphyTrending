import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent implements OnInit {
  searchItem = [1, 2, 2, 2, 2];
  constructor() {}

  ngOnInit(): void {}
  handleSearchChange(value: string) {
    console.log(value);
  }
}
