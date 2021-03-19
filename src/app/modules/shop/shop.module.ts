import { NgModule } from '@angular/core';

import { ShopRoutingModule } from './shop-routing.module';
import { ShopComponent } from './shop.component';
import {SharedModule} from '../shared/shared.module';


@NgModule({
  declarations: [ShopComponent],
  imports: [
    SharedModule,
    ShopRoutingModule
  ]
})
export class ShopModule { }
