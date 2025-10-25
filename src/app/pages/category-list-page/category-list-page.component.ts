import { Component, inject, OnInit } from '@angular/core';
import { CategoryInterface } from '../../interfaces/category.interface';
import { CategoryService } from '../../services/category.service';
import { CategoryCardComponent } from '../../ui-kit/category-card/category-card.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category-list-page',
  imports: [CategoryCardComponent],
  templateUrl: './category-list-page.component.html',
  styleUrl: './category-list-page.component.scss',
})
export class CategoryListPageComponent implements OnInit {
  private router = inject(Router);
  private service = inject(CategoryService);

  categories: CategoryInterface[] = [];

  ngOnInit() {
    this.service.getAll().subscribe((c) => {
      this.categories = c;
    });
  }

  onClick(id: string) {
    console.log('click from ', id);
    this.router.navigate([`/catalog/category/${id}`]).then();
  }
}
