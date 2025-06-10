export interface BaseExerciseList {
  id: string;
  title: string;
  description: string;
  tags: string[];
}

export interface ExerciseList extends BaseExerciseList {
  exercises: Exercise[];
}

export interface Exercise {
  id: string;
  title: string;
  description?: string;
  tags: string[];
}

export interface CompletableExercise extends Exercise {
  isCompleted: boolean;
}

export interface CompletableExerciseList extends ExerciseList {
  exercises: CompletableExercise[];
}
