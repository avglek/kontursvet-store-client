import { Component } from '@angular/core';
import { ButtonComponent } from '../../ui-kit/button/button.component';

@Component({
  selector: 'app-phone',
  imports: [ButtonComponent],
  templateUrl: './phone.component.html',
  styleUrl: './phone.component.scss',
})
export class PhoneComponent {
  phone = '+7(812)755-05-05';
}
