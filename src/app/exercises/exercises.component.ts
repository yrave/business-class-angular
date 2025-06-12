import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { TagComponent } from '../tag/tag.component';
import {
  CompletableExercise,
  CompletableExerciseList,
  Exercise,
} from './exercises.model';
import { ExercisesService } from './exercises.service';

@Component({
  selector: 'app-exercises',
  imports: [TagComponent, MatCheckboxModule],
  styleUrl: './exercises.component.scss',
  templateUrl: './exercises.component.html',
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
