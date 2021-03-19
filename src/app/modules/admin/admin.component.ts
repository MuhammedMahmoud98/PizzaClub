import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {AddProductModalComponent} from '../../components/add-product-modal/add-product-modal.component';
import {Store} from '@ngrx/store';
import {State} from '../../store/admin/reducers/Admin.reducer';
import {AddProduct} from '../../store/admin/actions/AddProduct.action';
import {Product} from '../../models/admin.model';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {CloseAlerts, DeleteProduct} from '../../store/admin/actions/DeleteAdminProduct.action';
import {animate, group, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
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
export class AdminComponent implements OnInit {
  // variables
  productAdded$!: Observable<boolean>;
  productDeleted$!: Observable<boolean>;
  errorOccurred$!: Observable<boolean>;
  // containers
  products$!: Observable<Product[]>;

  constructor(public dialog: MatDialog, private store: Store<{ AdminProducts: State }>) {
  }

  ngOnInit(): void {
    this.storeSelections();
  }

  storeSelections(): void {
    // @ts-ignore
    this.products$ = this.store.select('AdminProducts').pipe(map(res => res.adminProducts));
    // @ts-ignore
    this.productAdded$ = this.store.select('AdminProducts').pipe(map(res => res.added));
    // @ts-ignore
    this.productDeleted$ = this.store.select('AdminProducts').pipe(map(res => res.deleted));
    // @ts-ignore
    this.errorOccurred$ = this.store.select('AdminProducts').pipe(map(res => res.error));
  }

  deleteProduct(product: Product, productIndex: number): void {
    this.store.dispatch(new DeleteProduct(product.id, productIndex));
    this.closeAlerts();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AddProductModalComponent, {
      width: '600px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(product => {
      // return if user close the modal without updating it
      if (product === undefined) {
        return;
      }
      this.store.dispatch(new AddProduct({...product, addedToCart: false}));
      this.closeAlerts();
    });
  }

  closeAlerts(): void {
    setTimeout(() => this.store.dispatch(new CloseAlerts()), 2000);
  }

  // updating(render) only the changed part of the dom not all the dom
  trackByFn(index: number, item: any): number {
    return item.id; // or item.id
  }
}
