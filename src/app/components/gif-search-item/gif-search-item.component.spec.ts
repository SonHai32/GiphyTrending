import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GifSearchItemComponent } from './gif-search-item.component';

describe('GifSearchItemComponent', () => {
  let component: GifSearchItemComponent;
  let fixture: ComponentFixture<GifSearchItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GifSearchItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GifSearchItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
