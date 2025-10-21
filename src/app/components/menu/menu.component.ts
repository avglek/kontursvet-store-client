import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-menu',
  imports: [RouterLink],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
})
export class MenuComponent {
  menu = [
    {
      name: 'Каталог товаров',
      link: 'catalog',
    },
    {
      name: 'Услуги освещения',
      link: 'services',
    },
    {
      name: 'Наши работы',
      link: 'portfolio',
    },
    {
      name: 'Доставка и оплата',
      link: 'payment',
    },
    {
      name: 'Контакты',
      link: 'contact',
    },
  ];
}
