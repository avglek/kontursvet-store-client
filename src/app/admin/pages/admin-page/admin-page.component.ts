import { Component } from '@angular/core';
import { MenuComponent } from '../../components/menu/menu.component';
import { ContentComponent } from '../../components/content/content.component';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../../components/footer/footer.component';

@Component({
  selector: 'app-admin-page',
  imports: [HeaderComponent, MenuComponent, ContentComponent, FooterComponent],
  templateUrl: './admin-page.component.html',
  styleUrl: './admin-page.component.scss',
})
export class AdminPageComponent {}
