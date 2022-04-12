import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  list: any;
  id: any;
  constructor(
    private listService: ListService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): any {
    this.route.params.subscribe({
      next: (params) => {
        this.id = params['id'];
        console.log(this.id, params);
      },
    });

    this.listService.getListById(this.id).subscribe({
      next: (result: any) => (this.list = result),
    });
  }
}
