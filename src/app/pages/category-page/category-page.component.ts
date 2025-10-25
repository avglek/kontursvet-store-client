import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-category-page',
  imports: [],
  templateUrl: './category-page.component.html',
  styleUrl: './category-page.component.scss',
})
export class CategoryPageComponent implements OnInit {
  private router: ActivatedRoute = inject(ActivatedRoute);
  private service: CategoryService = inject(CategoryService);
  private id: string = '';
  categoryName: string = '';

  constructor() {
    this.router.params.subscribe((params) => {
      this.id = params['id'];
    });
  }

  ngOnInit() {
    this.service.getById(this.id).subscribe((response) => {
      console.log(response);
      this.categoryName = response['name'];
    });
  }
}
