import { Component, Input, OnInit, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-card-gradient',
  templateUrl: './card-gradient.component.html',
  styleUrls: ['./card-gradient.component.scss'],
})
export class CardGradientComponent implements OnInit {
  @Input('template') template!: TemplateRef<any>;
  @Input('hover') hover = false;
  constructor() {}

  ngOnInit(): void {}
}
