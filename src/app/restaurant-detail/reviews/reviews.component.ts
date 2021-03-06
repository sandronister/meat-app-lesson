import { Component, OnInit } from '@angular/core';
import { RestaurantsService } from 'app/restaurants/restaurants.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Component({
	selector: 'mt-reviews',
	templateUrl: './reviews.component.html'
})
export class ReviewsComponent implements OnInit {


  reviews:Observable<any>

	constructor(private restaurantService: RestaurantsService, private router: ActivatedRoute) {}

	ngOnInit() {
    this.reviews = this.restaurantService.reviewsOfRestaurant(this.router.parent.snapshot.params['id'])
  }
}
