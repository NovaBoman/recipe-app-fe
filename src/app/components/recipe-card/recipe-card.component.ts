import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-recipe-card',
  templateUrl: './recipe-card.component.html',
  styleUrls: ['./recipe-card.component.scss'],
})
export class RecipeCardComponent implements OnInit {
  form!: FormGroup;
  constructor(private fb: FormBuilder, private http: HttpClient) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      recipe_list_id: '',
      recipe_id: '',
    });
  }

  submit() {
    const formData = this.form.getRawValue();

    this.http.post('http://localhost:8000/api/register', formData).subscribe({
      next: (result) => {
        console.log('success');
        console.log(result);
      },
      error: (error) => {
        console.log('error');
        console.log(error);
      },
    });
  }

  @Input() recipe: any;
}
