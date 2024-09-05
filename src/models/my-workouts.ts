import { Exercise } from "./exercise.model";

export interface Workout {
    id: string;
    name: string;
    description: string;
    programImage: string;
    programType: string;
    programStructure: any
}

export interface Exercises {
    type: string;
    exercise: Exercise[],
    sets: number,
    reps: number,
}