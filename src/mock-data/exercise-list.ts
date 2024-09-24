import { ExerciseCategory } from "../models/exercise-category";
import { ExerciseListAccCategory } from "../models/exercises-list-according-category.model";

export const EXERCISE_CATEGORY: ExerciseCategory[] = [
  {
    id: "1",
    name: "Chest",
    icon: require("../../assets/images/chest.jpg"),
  },
  {
    id: "2",
    name: "Back",
    icon: require("../../assets/images/back.jpg"),
  },
  {
    id: "3",
    name: "Arms",
    icon: require("../../assets/images/arms.jpg"),
  },
  {
    id: "5",
    name: "Glutes",
    icon: require("../../assets/images/legs-2.jpg"),
  },
  {
    id: "11",
    name: "Cardio",
    icon: require("../../assets/images/cardio.jpg"),
  },
]


export const EXERCISES = {
  calfRaises: "Calf Raises",
  bbDeadlift: "Barbell Deadlift",
  backExtension: "Back Extension",
  seatedDBLateralRaises: "Seated DB Lateral Raises",
  standShoulderPress: "Standing Shoulder Press",
  bbFrontRaises: "Barbell Front Raises",
  cableLateralRaises: "Cable Lateral Raises",
  rearDeltFly: "Rear Delt Fly",
  dbShrug: "Dumbell Shrugs",
  squats: "Squates",
  hipThrust: "Hip Thrust",
  rdl: "Romainian Deadlift",
  splitSquats: "Split Squats",
  lunges: "Lunges",
  dbHipAbduction: "Dumbell Hip Abduction",
  dbStepUps: "Dumbell Step Ups",
  gluteBridges: "Glute Bridges",
  donkeyKickBacks: "Donkey Kick Backs",
  bandedClams: "Banded Clams",
  bandedKickBacks: "Banded Kick Backs",
  romanianDeadLifts: "Romanian Deadlift",
  sumoSquats: "Sumo Squats",
  shoulderPress: "Shoulder Press",
  lateralRaises: "Lateral Raises",
  legPress: "Leg Press",
  goodMornings: "Good Mornings",
  sumoDeadlift: "Sumo Deadlift",
  bulgarianSplitSquats: "Bulgarian Split Squats",
  reverseLunges: "Reverse Lunges",
  singleLegRomanians: "Single Leg Romanian Deadlift",
  curtsyLunges: "Curtsy Lunges",
};
