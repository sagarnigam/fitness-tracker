import { Exercise } from "./exercise.model";

export interface ExerciseListAccCategory {
    id: string;
    exerciseCategory: string;
    exercise: Exercise[];
}