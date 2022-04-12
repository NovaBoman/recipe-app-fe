import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicComponent } from './public.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { HttpClientModule } from '@angular/common/http';
import { SearchComponent } from './search/search.component';
import { RecipeComponent } from './recipe/recipe.component';
import { RecipeCardComponent } from '../components/recipe-card/recipe-card.component';
import { AddToListComponent } from '../components/add-to-list/add-to-list.component';


@NgModule({
  declarations: [
    PublicComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    SearchComponent,
    RecipeComponent,
    RecipeCardComponent,
    AddToListComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    HttpClientModule,
  ]
})
export class PublicModule { }
