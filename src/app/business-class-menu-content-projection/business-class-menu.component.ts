import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { BusinessClassMenuPresenterComponent } from './business-class-menu-presenter/business-class-menu-presenter.component';
import { BusinessClassMenuSearchComponent } from './business-class-menu-search/business-class-menu-search.component';
import { DrinkItem, FoodItem, Menu } from './business-class-menu.model';
import { BusinessClassMenuService } from './business-class-menu.service';

@Component({
  selector: 'app-business-class-menu',
  imports: [
    CommonModule,
    BusinessClassMenuPresenterComponent,
    BusinessClassMenuSearchComponent,
  ],
  styleUrl: './business-class-menu.component.scss',
  templateUrl: './business-class-menu.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BusinessClassMenuContentProjectionContainerComponent {
  service = inject(BusinessClassMenuService);

  filteredMenu$ = this.service.filteredMenu$;

  searchValueChange($event: string) {
    this.service.searchValue.next($event);
  }

  filterMenu(menu: Menu, searchTerm: string | null): Menu {
    return this.service.filterMenu(menu, searchTerm);
  }

  isFavorite(item: FoodItem | DrinkItem): boolean {
    return this.service.isFavorite(item);
  }

  addFavorite(item: FoodItem) {
    return this.service.addFavorite(item);
  }

  removeFavorite(item: FoodItem) {
    return this.service.removeFavorite(item);
  }

  getColor(tag: string): string {
    return this.service.getColor(tag);
  }

  tags(item: FoodItem): { name: string; color: string }[] {
    return this.service.tags(item);
  }
}
