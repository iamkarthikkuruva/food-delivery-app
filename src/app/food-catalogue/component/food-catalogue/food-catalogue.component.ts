import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FoodCatalogueService } from '../../service/food-catalogue.service';
import { FoodCataloguePage } from '../../../shared/models/FoodCataloguePage';
import { FoodItem } from '../../../shared/models/FoodItem';
import { Restaurant } from '../../../shared/models/Restaurant';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-food-catalogue',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './food-catalogue.component.html',
  styleUrl: './food-catalogue.component.css'
})
export class FoodCatalogueComponent {

  restaurantId!: number;
  // foodItemResponse: FoodCataloguePage;
  foodItemResponse: FoodCataloguePage = { foodItemsList: [], restaurant: {} as Restaurant }; // initialize
  foodItemCart: FoodItem[] = [];
  orderSummary!: FoodCataloguePage;

  constructor(private route: ActivatedRoute, private router: Router, private foodCatalogueService: FoodCatalogueService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(
      params => {
        const id = params.get('id');
        this.restaurantId = id ? +id : 0;
      }
    );
    this.getFoodItemsByRestaurant(this.restaurantId);
  }

  getFoodItemsByRestaurant(restaurantId: number) {
    this.foodCatalogueService.getFoodItemsByRestaurant(restaurantId).subscribe(
      data => {
        this.foodItemResponse = data;
      }
    )
  }
  increment(food: any) {
    food.quantity++;
    const index = this.foodItemCart.findIndex(item => item.id === food.id);
    if (index === -1) {
      // if record does not exist, add it to the array
      this.foodItemCart.push(food);
    } else {
      // if record exists, update it in the array
      this.foodItemCart[index] = food;
    }
  }

  decrement(food: any) {
    if (food.quantity > 0) {
      food.quantity--;

      const index = this.foodItemCart.findIndex(item => item.id === food.id);
      if (this.foodItemCart[index].quantity == 0) {
        this.foodItemCart.slice(index, 1);
      } else {
        // if record exists, update it in the array
        this.foodItemCart[index] = food;
      }
    }
  }

  onCheckOut() {
    this.foodItemCart;
    this.orderSummary = {
      foodItemsList: [],
      restaurant: {} as Restaurant
    }
    this.orderSummary.foodItemsList = this.foodItemCart;
    this.orderSummary.restaurant = this.foodItemResponse.restaurant;
    this.router.navigate(['/orderSummary'], { queryParams: { data: JSON.stringify(this.orderSummary) } });
  }

}
