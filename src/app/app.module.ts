import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ROUTES } from './app.routes';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { RestaurantComponent } from './restaurants/restaurant/restaurant.component';
import { RestaurantDetailComponent } from './restaurant-detail/restaurant-detail.component';
import { MenuComponent } from './restaurant-detail/menu/menu.component';
import { CartComponent } from './restaurant-detail/cart/cart.component';
import { ReviewsComponent } from './restaurant-detail/reviews/reviews.component';
import { MenuItemComponent } from './restaurant-detail/menu/menu-item/menu-item.component';
import { InputContainerComponent } from './shared/input-container/input-container.component';

import { RestaurantsService } from './restaurants/restaurants.service';
import { CartService } from './restaurant-detail/cart/cart.service';
import { OrderComponent } from './order/order.component';


@NgModule({
	declarations: [
		AppComponent,
		HeaderComponent,
		HomeComponent,
		AboutComponent,
		RestaurantsComponent,
		RestaurantComponent,
		RestaurantDetailComponent,
		MenuComponent,
		CartComponent,
		ReviewsComponent,
		MenuItemComponent,
		OrderComponent,
		InputContainerComponent
	],
	imports: [ BrowserModule, HttpModule, RouterModule.forRoot(ROUTES), FormsModule ],
	providers: [ RestaurantsService, CartService, { provide: LOCALE_ID, useValue: 'pt-BR' } ],
	bootstrap: [ AppComponent ]
})
export class AppModule {}
