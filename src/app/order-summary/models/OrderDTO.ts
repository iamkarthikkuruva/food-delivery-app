import { FoodItem } from "../../shared/models/FoodItem";
import { Restaurant } from "../../shared/models/Restaurant";

export interface OrderDTO {
    userId?: number;
    foodItemsList: FoodItem[];
    restaurant?: Restaurant;
}