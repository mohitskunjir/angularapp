import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appCustomDirective]'
})
export class CustomDirectiveDirective {

  constructor(private elementRef: ElementRef) { }

  @HostListener('mouseenter')onMouseEnter(){
      this.elementRef.nativeElement.style.fontWeight = 'bold';
  }

  @HostListener('mouseleave')onMouseLeave(){
    this.elementRef.nativeElement.style.fontWeight = 'normal';
    this.elementRef.nativeElement.style.backgroundColor = 'initial';
  }
}

