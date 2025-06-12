import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
  output,
} from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-business-class-menu-search-presenter',
  imports: [
    CommonModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatIconModule,
  ],
  styleUrl: './business-class-menu-search-presenter.component.scss',
  templateUrl: './business-class-menu-search-presenter.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BusinessClassMenuSearchPresenterComponent
  implements OnInit, OnDestroy
{
  private subscriptions = new Subscription();

  searchFormControl = new FormControl('');

  searchValueChange = output<string>();

  ngOnInit(): void {
    this.searchFormControl.valueChanges
      .subscribe((searchTerm) => {
        this.searchValueChange.emit(searchTerm || '');
      })
      .add(this.subscriptions);
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
