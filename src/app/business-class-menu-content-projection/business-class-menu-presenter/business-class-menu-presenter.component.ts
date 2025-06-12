import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  input,
  output,
} from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { TagComponent } from '../../tag/tag.component';
import { DrinkItem, FoodItem, Menu } from '../business-class-menu.model';

@Component({
  selector: 'app-business-class-menu-presenter',
  imports: [
    CommonModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatIconModule,
    TagComponent,
  ],
  styleUrl: './business-class-menu-presenter.component.scss',
  templateUrl: './business-class-menu-presenter.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BusinessClassMenuPresenterComponent {
  filteredMenu = input.required<Menu | null>();
  isFavorite = input.required<(item: FoodItem | DrinkItem) => boolean>();
  getColor = input.required<(tag: string) => string>();
  tags =
    input.required<(item: FoodItem) => { name: string; color: string }[]>();

  addFavorite = output<FoodItem>();
  removeFavorite = output<FoodItem>();
}
