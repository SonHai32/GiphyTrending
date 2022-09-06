import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardGradientComponent } from './card-gradient.component';

describe('CardGradientComponent', () => {
  let component: CardGradientComponent;
  let fixture: ComponentFixture<CardGradientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardGradientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardGradientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
