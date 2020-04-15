import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirectiveDirective {


  constructor(renderer2: Renderer2, el: ElementRef) {
    renderer2.setStyle(el.nativeElement, 'backgroundColor', 'blue');

  }

}
