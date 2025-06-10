import { Routes } from "@angular/router";
import { BusinessClassMenuComponent } from "./business-class-menu/business-class-menu.component";
import { ExercisesComponent } from "./exercises/exercises.component";

export const routes: Routes = [
  {
    path: "exercises",
    component: ExercisesComponent,
  },
  {
    path: "**",
    component: BusinessClassMenuComponent,
  },
];
