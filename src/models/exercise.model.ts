export interface Exercise {
  id: string;
  name: string;
  videoId: string;
  mainTargetMuscle: string;
  description: string;
  instructions?: string[];
}
