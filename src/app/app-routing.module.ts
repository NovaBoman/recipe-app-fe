import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './public/home/home.component';
import { LoginComponent } from './public/login/login.component';
import { PublicComponent } from './public/public.component';
import { RecipeComponent } from './public/recipe/recipe.component';
import { RegisterComponent } from './public/register/register.component';
import { SearchComponent } from './public/search/search.component';
import { ListComponent } from './secure/list/list.component';
import { SecureComponent } from './secure/secure.component';
import { UserComponent } from './secure/user/user.component';

const routes: Routes = [
  {
    path: '',
    component: PublicComponent,

    children: [
      { path: '', component: HomeComponent },
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
      { path: 'search/:query', component: SearchComponent },
      { path: 'recipe/:id', component: RecipeComponent },
    ],
  },

  {
    path: 'secure',
    component: SecureComponent,

    children: [
      { path: '', component: UserComponent },
      { path: 'list/:id', component: ListComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
