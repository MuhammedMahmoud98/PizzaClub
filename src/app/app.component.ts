import {Component, OnInit} from '@angular/core';
import {animate, group, style, transition, trigger} from '@angular/animations';
import {Store} from '@ngrx/store';
import {State} from './store/admin/reducers/Admin.reducer';
import {GetAdminProducts} from './store/admin/actions/GetAdminProducts.action';
import {AdminService} from './services/admin/admin.service';
import {ShopState} from './store/shop/reducers/Shop.reducer';
import {Product} from './models/admin.model';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {GetCartList} from './store/shop/actions/GetCartProducts.action';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('translateAndScale', [
      transition(':enter', [
        style({transform: 'translateX(-270px)', opacity: '0'}),
        group([
          animate(200, style({opacity: '1'})),
          animate('200ms ease-in', style({transform: 'translateX(0)'})),
        ])
      ]),
      transition(':leave', [
        group([
          animate('200ms ease-in', style({opacity: '0'})),
          animate('200ms ease-in', style({transform: 'translateX(-270px)'}))
        ]),
      ])
    ])
  ]
})
export class AppComponent implements OnInit {
  // variables
  phoneSideNavToggle = false;
  showFiller = false;
  // containers
  cartList$!: Observable<Product[]>;
  constructor(private store: Store<{ AdminProducts: State }>, private shopStore: Store<{ShopProducts: ShopState}>) {
  }

  ngOnInit(): void {
    this.getAdminProducts();
    this.getCartList();
  }

  getCartList(): void {
    this.shopStore.dispatch(new GetCartList());
    // @ts-ignore
    this.cartList$ = this.shopStore.select('ShopProducts').pipe(map(res => res.cart));
  }


  getAdminProducts(): void {
    this.store.dispatch(new GetAdminProducts());
  }

  togglePhoneSideNav(): void {
    this.phoneSideNavToggle = !this.phoneSideNavToggle;
  }
}
