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
];

const generateRandomId = () => {
  return Math.random().toString(36).substr(2, 9); // Generates a random alphanumeric string
};

export const EXERCISE_LIST: ExerciseListAccCategory[] = [
  {
    id: generateRandomId(),
    exerciseCategory: "Chest",
    exercise: [
      {
        id: generateRandomId(),
        name: "Push Ups",
        description:
          "The push-up is a classic bodyweight exercise that targets the muscles of the upper body, particularly the chest, shoulders, and arms, while also engaging the core. It is one of the most effective and versatile exercises, suitable for all fitness levels, and can be performed virtually anywhere without the need for equipment.",
        muscles: ["Chest", "Triceps", "Shoulders"],
        instructions: [
          "Starting Position: Begin in a high plank position with your hands placed slightly wider than shoulder-width apart, arms fully extended, and legs straight behind you. Your body should form a straight line from head to heels.",
          "Lowering Phase: Slowly lower your body by bending your elbows, keeping them at a 45-degree angle to your torso. Lower until your chest is just above the floor.",
          "Bottom Position: Briefly pause at the bottom of the movement, ensuring your body remains straight and your core is engaged.",
          "Pushing Phase: Push through your palms to straighten your arms and return to the starting position.",
          "Repeat: Perform the desired number of repetitions, maintaining proper form throughout.",
        ],
      },
      {
        id: generateRandomId(),
        name: "Chest Dips",
        description: "Chest Dips",
      },
      {
        id: generateRandomId(),
        name: "Incline Bench Press",
        description: "Incline Bench Press",
      },
      {
        id: generateRandomId(),
        name: "Bench Press",
        description: "Bench Press",
      },
      {
        id: generateRandomId(),
        name: "Decline Bench Press",
        description: "Decline Bench Press",
      },
      {
        id: generateRandomId(),
        name: "Cable fly",
        description: "Cable fly",
      },
      {
        id: generateRandomId(),
        name: "Cable Press",
        description: "Cable Press",
      },
      {
        id: generateRandomId(),
        name: "Lower Cable Press",
        description: "Lower Cable Press",
      },
    ],
  },
  {
    id: generateRandomId(),
    exerciseCategory: "Back",
    exercise: [
      {
        id: generateRandomId(),
        name: "Pullup",
        description: "Pullup",
      },
      {
        id: generateRandomId(),
        name: "Barbell bentover Row",
        description: "Barbell bentover Row",
      },
      {
        id: generateRandomId(),
        name: "Lat Pull Down",
        description: "Lat Pull Down",
      },
      {
        id: generateRandomId(),
        name: "Rows",
        description: "Rows",
      },
      {
        id: generateRandomId(),
        name: "Straight Arm Bar Pull Down",
        description: "Straight Arm Bar Pull Down",
      },
      {
        id: generateRandomId(),
        name: "Close Grip Pull Down",
        description: "Close Grip Pull Down",
      },
    ],
  },
  {
    id: generateRandomId(),
    exerciseCategory: "Shoulders",
    exercise: [],
  },
  {
    id: generateRandomId(),
    exerciseCategory: "Legs",
    exercise: [],
  },
  {
    id: generateRandomId(),
    exerciseCategory: "Arms",
    exercise: [
      {
        id: generateRandomId(),
        name: "Barbell Curl",
        description: "Barbell Curl",
      },
      {
        id: generateRandomId(),
        name: "EZ Skullcrusher",
        description: "EZ Skullcrusher",
      },
      {
        id: generateRandomId(),
        name: "Dumbell Curl",
        description: "Dumbell Curl",
      },
      {
        id: generateRandomId(),
        name: "Cable Push Down",
        description: "Cable Push Down",
      },
      {
        id: generateRandomId(),
        name: "Reverse Cable Push Down",
        description: "Reverse Cable Push Down",
      },
      {
        id: generateRandomId(),
        name: "Hammer Curl",
        description: "Hammer Curl",
      },
      {
        id: generateRandomId(),
        name: "Tricep Dips",
        description: "Tricep Dips",
      },
      {
        id: generateRandomId(),
        name: "Ez Prepacher Curl",
        description: "Ez Prepacher Curl",
      },
    ],
  },
  {
    id: generateRandomId(),
    exerciseCategory: "Cardio",
    exercise: [],
  },
];

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
