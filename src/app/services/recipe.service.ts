import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  constructor(private http: HttpClient) {}

  apiKey = 'apiKey=8dcc09e4297c48a9821e1d4192a9bb19';

  // Get number of random recipes 1-100
  getRandomRecipes(number: number) {
    return this.http.get(
      `https://api.spoonacular.com/recipes/random?number=${number}&${this.apiKey}`
    );
  }

  getRecipe(id: string) {
    return this.http.get(
      `https://api.spoonacular.com/recipes/${id}/information?includeNutrition=false&${this.apiKey}`
    );
  }

  getBulkRecipes(recipeIds: any) {
    return this.http.get(
      `https://api.spoonacular.com/recipes/informationBulk?ids=${recipeIds}&includeNutrition=false&${this.apiKey}`
    );
  }

  recipeSearch(number: number, query: string, filterArray: any) {
    return this.http.get(
      `https://api.spoonacular.com/recipes/complexSearch?query=${query}&number=${number}&intolerances=${filterArray}&${this.apiKey}`
    );
  }
}
