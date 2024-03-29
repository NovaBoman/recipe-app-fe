import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent implements OnInit {
  constructor(private route: Router) {}
  ngOnInit(): void {}

  search(value: string) {
    console.log(value);
    this.route.navigate(['/search', value]);
  }
}
