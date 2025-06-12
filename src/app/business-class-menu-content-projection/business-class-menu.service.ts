import { Injectable } from '@angular/core';
import { BehaviorSubject, combineLatest, map, Observable, of } from 'rxjs';
import { DrinkItem, FoodItem, Menu } from './business-class-menu.model';

@Injectable({
  providedIn: 'root',
})
export class BusinessClassMenuService {
  favorites: Set<string> = new Set<string>();
  searchValue = new BehaviorSubject<string>('');

  menu$: Observable<Menu> = of({
    food: [
      {
        name: 'Starter',
        items: [
          {
            id: 'starter1',
            name: 'Smoked Salmon Tartare',
            description: 'With avocado cream and microgreens',
            tags: ['seafood', 'gluten-free'],
          },
          {
            id: 'starter2',
            name: 'Caprese Salad',
            description: 'Heirloom tomatoes, buffalo mozzarella, and basil oil',
            tags: ['vegetarian', 'gluten-free'],
          },
        ],
      },
      {
        name: 'Main',
        items: [
          {
            id: 'main1',
            name: 'Grilled Beef Tenderloin',
            description:
              'Served with truffle mashed potatoes and seasonal vegetables',
            tags: ['meat', 'gluten-free'],
          },
          {
            id: 'main2',
            name: 'Miso-Glazed Black Cod',
            description: 'With jasmine rice and bok choy',
            tags: ['seafood'],
          },
          {
            id: 'main3',
            name: 'Pumpkin Ravioli',
            description: 'In sage butter sauce with roasted pine nuts',
            tags: ['vegetarian'],
          },
        ],
      },
      {
        name: 'Dessert',
        items: [
          {
            id: 'dessert1',
            name: 'Chocolate Fondant',
            description: 'With vanilla bean ice cream',
            tags: ['vegetarian'],
          },
          {
            id: 'dessert2',
            name: 'Cheese Plate',
            description:
              'Selection of international cheeses with crackers and fruit',
            tags: ['vegetarian'],
          },
          {
            id: 'dessert3',
            name: 'Fresh Fruit Bowl',
            description: 'Seasonal fruits with mint syrup',
            tags: ['vegan', 'gluten-free'],
          },
        ],
      },
    ],
    drinks: {
      wines: [
        {
          id: 'wine1',
          name: 'Champagne Brut',
          description: 'French sparkling wine – dry and crisp',
        },
        {
          id: 'wine2',
          name: 'Chardonnay',
          description: 'Full-bodied white wine from California',
        },
        {
          id: 'wine3',
          name: 'Cabernet Sauvignon',
          description: 'Rich red wine with notes of blackcurrant',
        },
      ],
      nonAlcoholic: [
        {
          id: 'drink1',
          name: 'Still Water',
        },
        {
          id: 'drink2',
          name: 'Sparkling Water',
        },
        {
          id: 'drink3',
          name: 'Fresh Orange Juice',
        },
        {
          id: 'drink4',
          name: 'Coffee',
        },
        {
          id: 'drink5',
          name: 'Green Tea',
        },
      ],
    },
  });

  filteredMenu$ = combineLatest([this.menu$, this.searchValue]).pipe(
    map(([menu, searchTerm]) => this.filterMenu(menu, searchTerm)),
  );

  filterMenu(menu: Menu, searchTerm: string | null): Menu {
    if (!searchTerm) {
      return menu;
    }
    const updatedSearchTerm = searchTerm.toLowerCase();
    const filteredFood = menu.food.map((category) => {
      return {
        ...category,
        items: category.items.filter(
          (item) =>
            item.name.toLowerCase().includes(updatedSearchTerm) ||
            item.tags.some((tag) =>
              tag.toLowerCase().includes(updatedSearchTerm),
            ),
        ),
      };
    });
    const filteredWineDrinks = menu.drinks.wines.filter((drink) =>
      drink.name.toLowerCase().includes(updatedSearchTerm),
    );
    const filteredNonAlcoholicDrinks = menu.drinks.nonAlcoholic.filter(
      (drink) => drink.name.toLowerCase().includes(updatedSearchTerm),
    );
    return {
      food: filteredFood.filter((category) => category.items.length > 0),
      drinks: {
        wines: filteredWineDrinks,
        nonAlcoholic: filteredNonAlcoholicDrinks,
      },
    };
  }

  isFavorite(item: FoodItem | DrinkItem): boolean {
    return this.favorites.has(item.id);
  }

  addFavorite(item: FoodItem) {
    this.favorites.add(item.id);
  }

  removeFavorite(item: FoodItem) {
    this.favorites.delete(item.id);
  }

  getColor(tag: string): string {
    switch (tag) {
      case 'vegetarian':
        return '#00A10099';
      case 'vegan':
        return '#90EE9099';
      case 'gluten-free':
        return '#FFA50099';
      case 'seafood':
        return 'pink';
      case 'meat':
        return '#FF666699';
      default:
        return 'gray';
    }
  }

  tags(item: FoodItem): { name: string; color: string }[] {
    return item.tags.map((tag) => ({
      name: tag,
      color: this.getColor(tag),
    }));
  }
}
