import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import {State} from '../../store/admin/reducers/Admin.reducer';
import {Observable} from 'rxjs';
import {Product} from '../../models/admin.model';
import {map} from 'rxjs/operators';
import {animate, group, style, transition, trigger} from '@angular/animations';
import {AddToCart} from '../../store/shop/actions/AddToCart.action';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss'],
  animations: [
    trigger('translateAndScale', [
      transition(':enter', [
        style({transform: 'translateY(-10px)', opacity: '0'}),
        group([
          animate(200, style({opacity: '1'})),
          animate('200ms ease-in', style({transform: 'translateX(0)'})),
        ])
      ]),
      transition(':leave', [
        group([
          animate('200ms ease-in', style({opacity: '0'})),
          animate('200ms ease-in', style({transform: 'scale(0)'}))
        ]),
      ])
    ])
  ]
})
export class ShopComponent implements OnInit {
  // container
  shopProducts$!: Observable<Product[]>;
  constructor(private store: Store<{ AdminProducts: State }>) { }

  ngOnInit(): void {
    this.getShopProducts();
  }

  getShopProducts(): void {
    // @ts-ignore
    this.shopProducts$ = this.store.select('AdminProducts').pipe(map(res => res.adminProducts));
  }


  // updating(render) only the changed part of the dom not all the dom
  trackByFn(index: number, item: any): number {
    return item.id; // or item.id
  }

}
