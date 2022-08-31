import { Directive, EventEmitter, Output } from '@angular/core';
import * as $ from 'jquery';
import {
  BehaviorSubject,
  debounceTime,
  distinctUntilChanged,
  fromEvent,
  Subscription,
} from 'rxjs';

@Directive({
  selector: '[appScrollEvent]',
})
export class ScrollEventDirective {
  @Output('onScrollBottom') onScrollBottom = new EventEmitter();

  BOTTOM_OFFSET = 50;
  SCROLL_DEBOUNCE_TIME = 400; //ms

  subscriptions = new Subscription();

  constructor() {}

  ngAfterViewInit(): void {
    this.subscriptions.add(
      fromEvent(window, 'scroll')
        .pipe(debounceTime(this.SCROLL_DEBOUNCE_TIME), distinctUntilChanged())
        .subscribe(() => {
          this.handleScrollEvent();
        })
    );
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

  private handleScrollEvent() {
    if (this.isBottom()) {
      this.onScrollBottom.emit();
    }
  }

  private isBottom(): boolean {
    const documentHeight = $(document).height();
    const documentScrollTop = $(document).scrollTop();
    const windowHeight = $(window).height();
    return (
      !!documentHeight &&
      !!documentScrollTop &&
      !!windowHeight &&
      documentHeight - documentScrollTop - windowHeight < this.BOTTOM_OFFSET
    );
  }
}
