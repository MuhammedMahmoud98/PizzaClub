import { NgModule } from '@angular/core';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import {SharedModule} from '../shared/shared.module';
import {MatButtonModule} from '@angular/material/button';
import {MatRippleModule} from '@angular/material/core';
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import {CommonModule} from '@angular/common';
import {EffectsModule} from '@ngrx/effects';

@NgModule({
  declarations: [AdminComponent],
  imports: [
    SharedModule,
    EffectsModule,
    AdminRoutingModule,
    MatButtonModule,
    MatRippleModule,
    MatDialogModule,
    CommonModule,
    MatInputModule
  ]
})
export class AdminModule { }
