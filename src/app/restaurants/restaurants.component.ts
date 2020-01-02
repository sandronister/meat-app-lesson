import { Component, OnInit } from '@angular/core';

import { Restaurant } from './restaurant/restaurant.model';
import { RestaurantsService } from './restaurants.service';

@Component({
	selector: 'mt-restaurants',
	templateUrl: './restaurants.component.html'
})
export class RestaurantsComponent implements OnInit {
	constructor(private restauranteService: RestaurantsService) {}

	restaurants: Restaurant[] = null;

	ngOnInit() {
		this.restauranteService.restaurants().subscribe(restaurants => this.restaurants = restaurants);
	}
}
