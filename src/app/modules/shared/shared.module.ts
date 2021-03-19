import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import {SectionHeaderComponent} from '../../components/section-header/section-header.component';
import {AlertComponent} from '../../components/alert/alert.component';
import {ShopCardComponent} from '../../components/shop-card/shop-card.component';
import {MatButtonModule} from '@angular/material/button';



@NgModule({
  declarations: [
    SectionHeaderComponent,
    AlertComponent,
    ShopCardComponent
  ],
  exports: [
    SectionHeaderComponent,
    AlertComponent,
    ShopCardComponent,
    CommonModule
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule
  ]
})
export class SharedModule { }
