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
    return this.http
      .delete(`http://localhost:8000/api/lists/${id}/delete`, {
        headers: this.headers,
      })
      .subscribe({
        next: (result: any) => {
          console.log('success');
          console.log(result);
          this.router.navigate(['/secure']);
        },
        error: (error: any) => {
          console.log('error');
          console.log(error);
        },
      });
  }
}
