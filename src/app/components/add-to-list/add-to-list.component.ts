import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-add-to-list',
  templateUrl: './add-to-list.component.html',
  styleUrls: ['./add-to-list.component.scss'],
})
export class AddToListComponent implements OnInit {
  lists: any;
  headers = this.listService.headers;
  @Input() recipeId: any;

  form!: FormGroup;
  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private listService: ListService
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      recipe_list_id: '',
      recipe_id: this.recipeId,
    });

    this.listService.getLists().subscribe({
      next: (result) => (this.lists = result),
    });
  }

  submit() {
    const formData = this.form.getRawValue();

    this.http
      .post('http://localhost:8000/api/lists/entry', formData, {
        headers: this.headers,
      })
      .subscribe({
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
}