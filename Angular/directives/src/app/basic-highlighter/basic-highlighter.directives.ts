import { Directive, ElementRef, OnInit } from "@angular/core";
@Directive({
    selector:'[appBasicHighlighter]'
})
export class basicHighlighterDirectives implements OnInit{
    constructor(private elementRef: ElementRef) {    
    }
    ngOnInit() {
        this.elementRef.nativeElement.style.backgroundColor = 'black';
        this.elementRef.nativeElement.style.color = 'white';
    }
}