import { Component } from '@angular/core';
import { CardComponent } from '../../ui-kit/card/card.component';

@Component({
  selector: 'app-home',
  imports: [CardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  buttonTitle = 'В корзину';
  protected readonly onclick = onclick;

  onClick() {
    console.log('click');
  }
}
