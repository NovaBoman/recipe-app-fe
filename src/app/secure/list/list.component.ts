import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ListService } from 'src/app/services/list.service';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  list: any;
  entries: any;
  recipeIds: any = [];
  recipes: any;
  id: any;

  headers = new HttpHeaders({
    Authorization: `Bearer ${localStorage.getItem('token')}`,
  });

  constructor(
    private listService: ListService,
    private recipeService: RecipeService,
    private route: ActivatedRoute,
    private http: HttpClient,
    private router: Router
  ) {}

  ngOnInit(): any {
    this.route.params.subscribe({
      next: (params) => {
        this.id = params['id'];
        console.log(this.id, params);
      },
    });

    this.listService.getListById(this.id).subscribe({
      next: (result: any) => {
        this.list = result;
        this.entries = Object.values(this.list.list_entries);

        this.entries.forEach((entry: any) =>
          this.recipeIds.push(entry['recipe_id'])
        );
        this.recipeService.getBulkRecipes(this.recipeIds).subscribe({
          next: (result: any) => {
            this.recipes = result;
            this.entries.forEach((entry: any) => {
              entry.recipe = this.recipes.find((recipe: any) => {
                return recipe.id === entry['recipe_id'];
              });
            });
          },
        });

        console.log(this.recipeIds);
      },

      error: (error: any) => {
        console.log('error');
        console.log(error);
      },
    });
  }

  deleteList(id: number) {
    this.listService.deleteList(id).subscribe({
      next: () => {
        this.router.navigate(['/secure']);
      },
      error: (error: any) => {
        console.log('error');
        console.log(error);
      },
    });
  }

  deleteEntry(id: number) {
    this.entries = this.entries.filter((entry: any) => entry.id != id);

    this.listService.deleteEntry(id).subscribe({
      next: (result) => {
        console.log(result);
      },
    });
  }
}
