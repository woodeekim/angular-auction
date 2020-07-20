import { Directive } from '@angular/core';

@Directive({
  selector: '[appLogDirective]',
  host : {
    '(input)' : 'onInput($event)'
  }
})
export class LogDirectiveDirective {
  constructor() { }

  onInput(event) {
    console.log(event.target.value);
  }

}
