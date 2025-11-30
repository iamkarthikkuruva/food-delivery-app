import { Routes } from '@angular/router';
import { OrderSummaryComponent } from './order-summary/component/order-summary/order-summary.component';
import { FoodCatalogueComponent } from './food-catalogue/component/food-catalogue/food-catalogue.component';
import { RestaurantListingComponent } from './restaurant-listing/component/restaurant-listing/restaurant-listing.component';

export const routes: Routes = [
    { path: '', redirectTo: 'restaurant-listing', pathMatch: 'full' },
    // { path: 'restaurant-listing', loadChildren: () => import('./restaurant-listing/restaurant-listing.module').then(m => m.RestaurantListingModule) },
    { path: 'restaurant-listing', component: RestaurantListingComponent },
    { path: 'food-catalogue/:id', component: FoodCatalogueComponent },
    { path: 'food-catalogue', component: FoodCatalogueComponent },
    { path: 'orderSummary', component: OrderSummaryComponent },
    { path: '**', redirectTo: 'restaurant-listing' }
];