import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  recipes: any;
  user: any;
  constructor(private recipeService: RecipeService) {}

  ngOnInit(): void {
    this.recipeService.getRandomRecipes(2).subscribe({
      next: (result: any) => (this.recipes = result.recipes),
    });

    this.loggedIn();
  }

  loggedIn() {
    if (localStorage.getItem('user') !== null) {
      this.user = true;
    } else {
      this.user = false;
    }
    return this.user;
  }
}
