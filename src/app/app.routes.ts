import { Routes } from '@angular/router';
import { BusinessClassMenuContainerComponent } from './business-class-menu-container-presenter/business-class-menu.component';
import { BusinessClassMenuContentProjectionContainerComponent } from './business-class-menu-content-projection/business-class-menu.component';
import { BusinessClassMenuComponent } from './business-class-menu/business-class-menu.component';
import { ExercisesComponent } from './exercises/exercises.component';

export const routes: Routes = [
  {
    path: 'exercises',
    component: ExercisesComponent,
  },
  {
    path: 'business-class-menu-container-presenter',
    component: BusinessClassMenuContainerComponent,
  },
  {
    path: 'business-class-menu-content-projection',
    component: BusinessClassMenuContentProjectionContainerComponent,
  },
  {
    path: '**',
    component: BusinessClassMenuComponent,
  },
];
