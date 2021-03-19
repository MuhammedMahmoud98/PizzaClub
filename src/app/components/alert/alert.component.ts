import {Component, Input, OnInit} from '@angular/core';
import {animate, group, style, transition, trigger} from '@angular/animations';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss'],
  animations: [
    trigger('slideInOut', [
      transition(':enter', [
        style({transform: 'translateX(-200%)', opacity: '0'}),
        group([
          animate(200, style({opacity: '1'})),
          animate('200ms ease-in', style({transform: 'translateX(0)'})),
        ])
      ]),
      transition(':leave', [
        group([
          animate('200ms ease-in', style({transform: 'scale(0)'}))
        ]),
      ])
    ])
  ]
})

export class AlertComponent implements OnInit {
  @Input() errorMessage!: string;
  @Input() errorBoolean!: Observable<boolean>;
  @Input() alertType!: string;
  constructor() { }

  ngOnInit(): void {
  }

}
