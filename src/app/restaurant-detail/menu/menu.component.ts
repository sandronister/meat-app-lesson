import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { MenuItem } from './menu-item/menu-item.model';
import { RestaurantsService } from 'app/restaurants/restaurants.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'mt-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent implements OnInit {


  menu:Observable<MenuItem[]>

  constructor(private restaurantService:RestaurantsService,private router:ActivatedRoute) { }

  ngOnInit() {
    this.menu = this.restaurantService.menuOfRestaurant(this.router.parent.snapshot.params['id'])
  }

  addMenuItem(item:MenuItem){
    console.log(item)
  }

}
