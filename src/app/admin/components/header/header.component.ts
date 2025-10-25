import { Component } from '@angular/core';
import { LogoComponent } from '../../../components/logo/logo.component';

@Component({
  selector: 'app-admin-header',
  imports: [LogoComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  title: string = 'Панель администратора';
}
