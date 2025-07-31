import { Component } from '@angular/core';
import { MenuComponent } from './Menu/menu.component';

@Component({
  selector: 'app-home',
  imports: [MenuComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
