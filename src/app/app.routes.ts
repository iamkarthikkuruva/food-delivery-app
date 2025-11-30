import { Routes } from '@angular/router';
<<<<<<< HEAD
import { OrderSummaryComponent } from './order-summary/component/order-summary/order-summary.component';
import { FoodCatalogueComponent } from './food-catalogue/component/food-catalogue/food-catalogue.component';
import { RestaurantListingComponent } from './restaurant-listing/component/restaurant-listing/restaurant-listing.component';
=======
import { RestaurantListingComponent } from './restaurant-listing/component/restaurant-listing/restaurant-listing.component';
import { FoodCatalogueComponent } from './food-catalogue/component/food-catalogue/food-catalogue.component';
import { OrderSummaryComponent } from './order-summary/component/order-summary/order-summary.component';
>>>>>>> 0602adbd42673611ab637e1fd2bdcdd5ef31157c

export const routes: Routes = [
    { path: '', redirectTo: 'restaurant-listing', pathMatch: 'full' },
    // { path: 'restaurant-listing', loadChildren: () => import('./restaurant-listing/restaurant-listing.module').then(m => m.RestaurantListingModule) },
    { path: 'restaurant-listing', component: RestaurantListingComponent },
    { path: 'food-catalogue/:id', component: FoodCatalogueComponent },
    { path: 'food-catalogue', component: FoodCatalogueComponent },
    { path: 'orderSummary', component: OrderSummaryComponent },
    { path: '**', redirectTo: 'restaurant-listing' }
<<<<<<< HEAD
];
=======
];
>>>>>>> 0602adbd42673611ab637e1fd2bdcdd5ef31157c
