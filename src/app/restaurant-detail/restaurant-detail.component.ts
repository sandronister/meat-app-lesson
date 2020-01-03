import { Component, OnInit } from '@angular/core';
import { RestaurantsService } from 'app/restaurants/restaurants.service';
import { ActivatedRoute } from '@angular/router';
import { Restaurant } from 'app/restaurants/restaurant/restaurant.model';

@Component({
	selector: 'mt-restaurant-detail',
	templateUrl: './restaurant-detail.component.html'
})

export class RestaurantDetailComponent implements OnInit {
	constructor(private restaurantService: RestaurantsService, private router: ActivatedRoute) {}

	restaurant: Restaurant;

	ngOnInit() {
		this.restaurantService
			.restaurantById(this.router.snapshot.params['id'])
			.subscribe((restaurant) => (this.restaurant = restaurant));
	}
}
