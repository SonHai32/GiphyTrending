import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  TemplateRef,
} from '@angular/core';
import { debounceTime, distinctUntilChanged, Subject } from 'rxjs';
import { InputType } from './input.model';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent implements OnInit {
  private readonly DEFAULT_DEBOUNCE = 0;
  @Input('value') value!: string;
  @Input('placeholder') placeholder!: string;
  @Input('type') type: InputType = 'text';
  @Input('icon') icon!: TemplateRef<any>;
  @Input('debounce') debounce: number = this.DEFAULT_DEBOUNCE;
  @Output('onValueChange') onValueChange = new EventEmitter<string>();
  constructor() {}
  inputValueSubject = new Subject<string>();

  ngOnInit(): void {
    this.inputValueSubject
      .pipe(debounceTime(this.debounce), distinctUntilChanged())
      .subscribe(val => this.onValueChange.emit(val));
  }

  handleInputChange(value: string) {
    this.inputValueSubject.next(value);
  }
}
