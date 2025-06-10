import { ChangeDetectionStrategy, Component, inject } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TagComponent } from "../tag/tag.component";
import { ExercisesService } from "./exercises.service";
import { MatCheckbox, MatCheckboxModule } from "@angular/material/checkbox";
import {
  CompletableExercise,
  CompletableExerciseList,
  Exercise,
  ExerciseList,
} from "./exercises.model";

@Component({
  selector: "app-exercises",
  imports: [TagComponent, MatCheckboxModule],
  styleUrl: "./exercises.component.scss",
  templateUrl: "./exercises.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExercisesComponent {
  exercisesService = inject(ExercisesService);

  exerciseList = this.exercisesService.getExerciseList();

  tags(exercise: Exercise): { name: string; color: string }[] {
    return this.exercisesService.tags(exercise);
  }

  tagsWithoutList(
    list: CompletableExerciseList,
    exercise: CompletableExercise,
  ): { name: string; color: string }[] {
    return this.exercisesService.tagsWithoutList(list, exercise);
  }

  toggleExercise(exercise: CompletableExercise) {
    this.exercisesService.toggleExercise(exercise.id);
  }
}
