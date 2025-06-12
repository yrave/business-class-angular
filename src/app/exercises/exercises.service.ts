import { Injectable } from '@angular/core';
import { exercises as exercisesMock } from '../../environments/environment';
import {
  CompletableExercise,
  CompletableExerciseList,
  Exercise,
  ExerciseList,
} from './exercises.model';

@Injectable({
  providedIn: 'root',
})
export class ExercisesService {
  exercises: ExerciseList[] = exercisesMock;

  getExerciseList(): CompletableExerciseList[] {
    const localStorageKey = 'business-class-angular-completed-exercises';
    const completedExercises = JSON.parse(
      localStorage.getItem(localStorageKey) || '[]',
    ) as string[];
    return this.exercises.map((exerciseList): CompletableExerciseList => {
      return {
        ...exerciseList,
        exercises: exerciseList.exercises.map(
          (exercise): CompletableExercise => {
            return {
              ...exercise,
              isCompleted: completedExercises.includes(exercise.id),
            };
          },
        ),
      };
    });
  }

  toggleExercise(id: string): void {
    const localStorageKey = 'business-class-angular-completed-exercises';
    const completedExercises = JSON.parse(
      localStorage.getItem(localStorageKey) || '[]',
    ) as string[];
    if (completedExercises.includes(id)) {
      // If the exercise is already completed, remove it from the completed list
      const index = completedExercises.indexOf(id);
      completedExercises.splice(index, 1);
      localStorage.setItem(localStorageKey, JSON.stringify(completedExercises));
      console.log(`Exercise with id ${id} marked as incomplete.`);
    } else {
      // If the exercise is not completed, add it to the completed list
      completedExercises.push(id);
      localStorage.setItem(localStorageKey, JSON.stringify(completedExercises));
      console.log(`Exercise with id ${id} marked as completed.`);
    }
  }

  getTagColor(tag: string): string {
    switch (tag) {
      case 'decoupling':
        return '#1155FF88';
      case 'beginner':
        return '#00AAEE88';
      case 'automation':
        return 'orange';
      case 'collaboration':
        return '#EE00FF99';
      case 'testing':
        return '#FF980088';
      case 'tooling':
        return '#FEA50088';
      case 'storybook':
        return 'rgb(255, 71, 133)';
      case 'linter':
        return '#34993499';
      case 'advanced':
        return '#FF0022AA';
      case 'discussion':
        return '#EE1133AA';
      default:
        return 'gray';
    }
  }

  tags(exercise: Exercise): { name: string; color: string }[] {
    return exercise.tags.map((tag) => ({
      name: tag,
      color: this.getTagColor(tag),
    }));
  }

  tagsWithoutList(
    list: CompletableExerciseList,
    exercise: CompletableExercise,
  ): { name: string; color: string }[] {
    return exercise.tags
      .filter((tag) => !list.tags.includes(tag))
      .map((tag) => ({
        name: tag,
        color: this.getTagColor(tag),
      }));
  }
}
