import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate, keyframes, group } from '@angular/animations';

@Component({
  selector: 'app-animation',
  templateUrl: './animation.component.html',
  styleUrls: ['./animation.component.css'],
  animations: [
    trigger('divState',[
      state('normal',style({
        backgroundColor: 'red',
        transform: 'translateX(0) scale(0.5)'
      })),
      state('hilighted',style({
        backgroundColor: 'blue',
        transform: 'translateX(100px) scale(1)'
      })),
      transition('normal <=> hilighted',animate(1000)),
    ]),
    trigger('wildState',[
      state('normal',style({
        backgroundColor: '#000000',
        transform: 'translateX(0) scale(1)'
      })),
      state('hilighted',style({
        backgroundColor: '#0E2F44',
        transform: 'translateX(100px) scale(0.5)'
      })),
      transition('normal <=> hilighted',animate(1000)),
    ]),
    trigger('list1',[
      state('in',style({
        opacity:1,
        transform:'translateX(0)'
      })),
      transition('void => *',[style({
        opacity:0,
        transform:'translateX(-100px)'
      }),animate(1000),
      ]),
      transition('* => void',[
        animate(1500,style({
          transform: 'translateX(100px)',
          opacity:1
      }))
    ])
    ]),
    trigger('list2',[
      state('in',style({
        opacity:1,
        transform:'translateX(0)'
      })),
      transition('void => *',[
        animate(2000,keyframes([
          style({
            transform:'translateX(-100px)',
            opacity:0,
            offset:0
          }),
          style({
            transform:'translateX(-50px)',
            opacity:0.5,
            offset:0.3
          }),
          style({
            transform:'translateX(-20px)',
            opacity:1,
            offset:0.8
          }),
          style({
            transform:'translateX(0px)',
            opacity:1,
            offset:1
          })
        ])),
    ]),
    transition('* => void',[
      group([
      animate(1200,style({
        color:'red',
      })),
      animate(1200,style({
        transform:'translateX(100px)',
        opacity:0,
      }))
    ])
  ])
    ])
  ]
})
export class AnimationComponent implements OnInit {
items: string[] = [
  'Angular','React','Observable'
];
state = 'normal';
wildState = 'normal';

  constructor() { }

  ngOnInit() {
    setInterval(()=>{
      this.onAnimate();
      this.onShrink();
    },500);
  }
  onAdd(element:string){
    this.items.push(element);
  }
  onAnimate(){
    this.state === 'normal'?this.state = 
                'hilighted':this.state = 'normal';
  }
  onShrink(){
    this.wildState === 'normal'?this.wildState = 
    'hilighted':this.wildState = 'normal';
  }

  animationStarted(event:Event){
    //console.log(event);
  }
  animationDone(event:Event){
    //console.log(event);
  }

  onDelete(item){
    this.items.splice(this.items.indexOf(item),1)
  }
}
