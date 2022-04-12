import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  query: any;
  recipes: any;
  @ViewChild('peanut') peanut: ElementRef | undefined;
  @ViewChild('dairy') dairy: ElementRef | undefined;
  @ViewChild('gluten') gluten: ElementRef | undefined;
  filterArray: any;
  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private recipeService: RecipeService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe({
      next: (params) => {
        this.query = params['query'];
        console.log(this.query, params);

        this.search();
      },
    });
  }
  search() {
    this.filterArray = [
      this.peanut?.nativeElement.checked
        ? this.peanut?.nativeElement.value
        : null,
      this.dairy?.nativeElement.checked
        ? this.dairy?.nativeElement.value
        : null,
      this.gluten?.nativeElement.checked
        ? this.gluten?.nativeElement.value
        : null,
    ];
    console.log(this.filterArray);
    this.recipeService.recipeSearch(3, this.query, this.filterArray).subscribe({
      next: (result: any) => (this.recipes = result.results),
    });
  }
}
