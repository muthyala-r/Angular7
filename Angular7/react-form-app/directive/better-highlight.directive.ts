import { Directive, OnInit, ElementRef, Renderer2, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
  
  possibleColors = [
    'darksalmon', 'hotpink', 'lightskyblue', 'goldenrod', 'peachpuff',
    'mediumspringgreen', 'cornflowerblue', 'blanchedalmond', 'lightslategrey'
  ];

  @Input() defaultColor : string = 'transparent'
  @Input()
  highlightColor : string  ='black'  
  @HostBinding('style.backgroundColor') backgroundColor : string;

  constructor(private elementRef : ElementRef,
              private renderer :Renderer2) { }
  ngOnInit(): void {
/*     this.renderer.setStyle(this.elementRef.nativeElement,
                           'background-color','green');
 */ 
    this.backgroundColor = this.defaultColor;
}
  
  
  @HostListener('mouseover') newColor(eventData :Event) {
/*     const colorPick = Math.floor(Math.random() * this.possibleColors.length);

    this.renderer.setStyle(this.elementRef.nativeElement,
      'background-color',this.possibleColors[colorPick]); */
      this.backgroundColor = this.highlightColor;
  }
  @HostListener('mouseleave') mouseleave(eventData :Event) {
    
   /*  this.renderer.setStyle(this.elementRef.nativeElement,
      'background-color','yellow');*/
      this.backgroundColor = this.defaultColor;
  } 

}
