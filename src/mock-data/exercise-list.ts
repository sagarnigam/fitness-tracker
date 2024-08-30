export const EXERCISE_CATEGORY: any[] = [
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

export const EXERCISE_LIST: any[] = [
  {
    id: generateRandomId(),
    exerciseCategory: "Chest",
    exercise: [
      {
        id: generateRandomId(),
        name: "Push Ups",
        description: 'Push Ups',
      },
      {
        id: generateRandomId(),
        name: "Chest Dips",
        description: 'Chest Dips',
      },
      {
        id: generateRandomId(),
        name: "Incline Bench Press",
        description: 'Incline Bench Press',
      },
      {
        id: generateRandomId(),
        name: "Bench Press",
        description: 'Bench Press',
      },
      {
        id: generateRandomId(),
        name: "Decline Bench Press",
        description: 'Decline Bench Press',
      },
      {
        id: generateRandomId(),
        name: "Cable fly",
        description: 'Cable fly',
      },
      {
        id: generateRandomId(),
        name: "Cable Press",
        description: 'Cable Press',
      },
      {
        id: generateRandomId(),
        name: "Lower Cable Press",
        description: 'Lower Cable Press',
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
        description: 'Pullup',
      },
      {
        id: generateRandomId(),
        name: "Barbell bentover Row",
        description: 'Barbell bentover Row',
      },
      {
        id: generateRandomId(),
        name: "Lat Pull Down",
        description: 'Lat Pull Down',
      },
      {
        id: generateRandomId(),
        name: "Rows",
        description: 'Rows',
      },
      {
        id: generateRandomId(),
        name: "Straight Arm Bar Pull Down",
        description: 'Straight Arm Bar Pull Down',
      },
      {
        id: generateRandomId(),
        name: "Close Grip Pull Down",
        description: 'Close Grip Pull Down',
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
        description: 'Barbell Curl',
      },
      {
        id: generateRandomId(),
        name: "EZ Skullcrusher",
        description: 'EZ Skullcrusher',
      },
      {
        id: generateRandomId(),
        name: "Dumbell Curl",
        description: 'Dumbell Curl',
      },
      {
        id: generateRandomId(),
        name: "Cable Push Down",
        description: 'Cable Push Down',
      },
      {
        id: generateRandomId(),
        name: "Reverse Cable Push Down",
        description: 'Reverse Cable Push Down',
      },
      {
        id: generateRandomId(),
        name: "Hammer Curl",
        description: 'Hammer Curl',
      },
      {
        id: generateRandomId(),
        name: "Tricep Dips",
        description: 'Tricep Dips',
      },
      {
        id: generateRandomId(),
        name: "Ez Prepacher Curl",
        description: 'Ez Prepacher Curl',
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
  calfRaises: 'Calf Raises',
  bbDeadlift: 'Barbell Deadlift',
  backExtension: 'Back Extension',
  seatedDBLateralRaises: 'Seated DB Lateral Raises',
  standShoulderPress: 'Standing Shoulder Press',
  bbFrontRaises: 'Barbell Front Raises',
  cableLateralRaises: 'Cable Lateral Raises',
  rearDeltFly: 'Rear Delt Fly',
  dbShrug: 'Dumbell Shrugs',
  squats: 'Squates',
  hipThrust: 'Hip Thrust',
  rdl: 'Romainian Deadlift',
  splitSquats: 'Split Squats',
  lunges: 'Lunges',
  dbHipAbduction: 'Dumbell Hip Abduction',
  dbStepUps: 'Dumbell Step Ups',
  gluteBridges: 'Glute Bridges',
  donkeyKickBacks: 'Donkey Kick Backs',
  bandedClams: 'Banded Clams',
  bandedKickBacks: 'Banded Kick Backs',
  romanianDeadLifts: 'Romanian Deadlift',
  sumoSquats: 'Sumo Squats',
  shoulderPress: 'Shoulder Press',
  lateralRaises: 'Lateral Raises',
  legPress: 'Leg Press',
  goodMornings: 'Good Mornings',
  sumoDeadlift: 'Sumo Deadlift',
  bulgarianSplitSquats: 'Bulgarian Split Squats',
  reverseLunges: 'Reverse Lunges',
  singleLegRomanians: 'Single Leg Romanian Deadlift',
  curtsyLunges: 'Curtsy Lunges',
};
