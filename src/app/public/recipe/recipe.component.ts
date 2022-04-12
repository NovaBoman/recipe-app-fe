import { Component, OnInit } from '@angular/core';
import { RecipeService } from 'src/app/services/recipe.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss'],
})
export class RecipeComponent implements OnInit {
  recipe: any;
  id: any;

  constructor(
    private recipeService: RecipeService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): any {
    this.route.params.subscribe({
      next: (params) => {
        this.id = params['id'];
        console.log(this.id, params);
      },
    });

    this.recipeService.getRecipe(this.id).subscribe({
      next: (result: any) => (this.recipe = result),
    });
  }
}
