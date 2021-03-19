import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {SharedModule} from './modules/shared/shared.module';
import {StoreModule} from '@ngrx/store';
// Angular material modules
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {HttpClientModule} from '@angular/common/http';
import {MatRippleModule} from '@angular/material/core';
import {AdminModule} from './modules/admin/admin.module';
import {ShopModule} from './modules/shop/shop.module';
import { AddProductModalComponent } from './components/add-product-modal/add-product-modal.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {AdminProductsReducer} from './store/admin/reducers/Admin.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import {EffectsModule} from '@ngrx/effects';
import {AdminEffects} from './store/admin/effects/admin.effects';
import {ShopEffects} from './store/shop/effects/shop.effects';
import {ShopService} from './services/shop/shop.service';
import {AdminService} from './services/admin/admin.service';
import {ShopProductsReducer} from './store/shop/reducers/Shop.reducer';



@NgModule({
  declarations: [
    AppComponent,
    AddProductModalComponent,
  ],
  imports: [
    SharedModule,
    BrowserModule,
    EffectsModule.forRoot([AdminEffects, ShopEffects]),
    // @ts-ignore
    StoreModule.forRoot({AdminProducts: AdminProductsReducer, ShopProducts: ShopProductsReducer}),
    AdminModule,
    ShopModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production })
  ],
  providers: [AdminEffects, ShopEffects, ShopService, AdminService],
  bootstrap: [AppComponent]
})
export class AppModule { }
