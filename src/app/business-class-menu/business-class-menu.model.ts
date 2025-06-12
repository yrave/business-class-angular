export interface Menu {
  food: {
    name: string;
    items: FoodItem[];
  }[];
  drinks: {
    wines: DrinkItem[];
    nonAlcoholic: DrinkItem[];
  };
}

export interface DrinkItem {
  id: string;
  name: string;
  description?: string;
}

export interface FoodItem {
  id: string;
  name: string;
  description: string;
  tags: string[];
}
