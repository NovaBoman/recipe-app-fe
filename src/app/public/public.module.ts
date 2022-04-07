import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicComponent } from './public.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    PublicComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class PublicModule { }
