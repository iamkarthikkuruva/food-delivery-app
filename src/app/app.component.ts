import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
<<<<<<< HEAD
import { HeaderComponent } from './header/component/header/header.component';
=======
import { HeaderComponent } from "./header/component/header/header.component";
import { RestaurantListingModule } from './restaurant-listing/restaurant-listing.module';
>>>>>>> 0602adbd42673611ab637e1fd2bdcdd5ef31157c

@Component({
  selector: 'app-root',
  standalone: true,
<<<<<<< HEAD
  imports: [CommonModule, RouterOutlet, HeaderComponent],
=======
  imports: [CommonModule, RouterOutlet, HeaderComponent, RestaurantListingModule],
>>>>>>> 0602adbd42673611ab637e1fd2bdcdd5ef31157c
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'food-delivery-app';
}
