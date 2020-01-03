import { MenuItem } from '../menu/menu-item/menu-item.model';
import { CartItem } from './cartItem.model';

export class CartService {

	items:CartItem[] = [];

	clear() {
		this.items = [];
	}

	addItem(item: MenuItem) {
		let foundItem = this.items.find((mItem) => mItem.menuItem.id == item.id);

		if (foundItem) {
			foundItem.quantity += 1;
			return;
		}

		this.items.push(new CartItem(item));
	}

	removeItem(item: CartItem) {
		this.items.splice(this.items.indexOf(item), 1);
	}

	total(): number {
		return this.items.map((item) => item.value()).reduce((prev, value) => prev + value, 0);
	}
}
