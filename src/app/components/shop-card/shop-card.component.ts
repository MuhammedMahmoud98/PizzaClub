import {Component, Input, OnInit} from '@angular/core';
import {Product} from '../../models/admin.model';
import {Store} from '@ngrx/store';
import {ShopState} from '../../store/shop/reducers/Shop.reducer';
import {State} from '../../store/admin/reducers/Admin.reducer';
import {AddToCart} from '../../store/shop/actions/AddToCart.action';

@Component({
  selector: 'app-shop-card',
  templateUrl: './shop-card.component.html',
  styleUrls: ['./shop-card.component.scss']
})
export class ShopCardComponent implements OnInit {
  @Input() product!: Product;

  constructor(private store: Store<{ ShopProducts: ShopState, AdminProducts: State}>) {
  }

  ngOnInit(): void {
  }

  addToCart(product: Product): void {
    this.store.dispatch(new AddToCart(product));
  }

}
