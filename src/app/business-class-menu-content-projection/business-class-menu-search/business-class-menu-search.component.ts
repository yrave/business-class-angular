import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { BusinessClassMenuService } from '../business-class-menu.service';
import { BusinessClassMenuSearchPresenterComponent } from './business-class-menu-search-presenter/business-class-menu-search-presenter.component';

@Component({
  selector: 'app-business-class-menu-search',
  imports: [BusinessClassMenuSearchPresenterComponent],
  styleUrl: './business-class-menu-search.component.scss',
  templateUrl: './business-class-menu-search.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BusinessClassMenuSearchComponent {
  service = inject(BusinessClassMenuService);

  searchValueChange($event: string) {
    this.service.searchValue.next($event);
  }
}
