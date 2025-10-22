import { Component, Input } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { ORDER_BUTTON_TITLE } from '../../shared/constants/ui-names';
import { formatCurrency } from '@angular/common';

@Component({
  selector: 'app-ui-card',
  imports: [ButtonComponent],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  @Input() image = '';
  @Input() alt = 'image';
  text = '«Белт-Лайт» 10 м, белый каучук, шаг 50 см, 20 патронов, IP44 ';
  buttonTitle = ORDER_BUTTON_TITLE;
  price = 5400;
  currency = 'руб/шт.';
}
