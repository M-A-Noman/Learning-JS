import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterDirectives]'
})
export class BetterDirectivesDirective implements OnInit{
  @Input() defaultColor: string = 'transparent'
  @Input() highlightColor: string = 'red';
  @HostBinding('style.backgroundColor') backgroundColor: string ='';
  constructor(private elRef:ElementRef,private renderer:Renderer2) { }
  ngOnInit() {
    this.renderer.setStyle(this.elRef.nativeElement, 'color', 'red')
    this.backgroundColor = this.defaultColor;
  }
  @HostListener('mouseenter') mouseover(eventData: Event) {
    this.renderer.setStyle(this.elRef.nativeElement, 'color', 'white');
    // this.renderer.setStyle(this.elRef.nativeElement, 'backgroundColor', 'red');
    // this.backgroundColor = 'blue';// same as previous line but in lesser line of code
    this.backgroundColor = this.highlightColor;
  }
  @HostListener('mouseleave') mouseleave(eventData: Event) {
    this.renderer.setStyle(this.elRef.nativeElement, 'color', 'red')
    // this.renderer.setStyle(this.elRef.nativeElement, 'backgroundColor', 'transparent');
    this.backgroundColor = this.defaultColor;
  }
}
