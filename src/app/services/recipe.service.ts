import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor(private http: HttpClient) {

   }

       
    apiKey = 'apiKey=5ff68332613048e489ece922d78373a9';
    
  // Get number of random recipes 1-100
  getRandomRecipes(number: number){

     return this.http.get(`https://api.spoonacular.com/recipes/random?number=${number}&${this.apiKey}`);
  }

  getRecipe(id: string){
    return this.http.get(`https://api.spoonacular.com/recipes/${id}/information?includeNutrition=false&${this.apiKey}`);
  }

}
