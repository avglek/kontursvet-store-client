import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ui-category-card',
  imports: [],
  templateUrl: './category-card.component.html',
  styleUrl: './category-card.component.scss',
})
export class CategoryCardComponent implements OnInit {
  @Input() title = '';
  @Input() description = '';
  @Input() image = '';

  ngOnInit(): void {
    console.log(this.title);
    console.log(this.image);
    if (this.description.length > 512) {
      this.description = `${this.description.substring(0, 512)} ...`;
    }

    if (this.image == 'img/category/null') {
      console.log('No image was found.');
      this.image = 'img/category/no-found.jpg';
    }
  }
}
