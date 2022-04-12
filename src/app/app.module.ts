import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PublicModule } from './public/public.module';
import { SecureComponent } from './secure/secure.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ListComponent } from './secure/list/list.component';
import { UserComponent } from './secure/user/user.component';


@NgModule({
  declarations: [
    AppComponent,
    SecureComponent,
    ListComponent,
    UserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PublicModule,
    RouterModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
