import { Component } from '@angular/core';
import { LogoComponent } from '../logo/logo.component';
import { SocialMediaComponent } from '../social-media/social-media.component';
import { MenuComponent } from '../menu/menu.component';
import { PhoneComponent } from '../phone/phone.component';

@Component({
  selector: 'app-header',
  imports: [LogoComponent, SocialMediaComponent, MenuComponent, PhoneComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {}
