const exercise1 = {
  id: "1",
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
};

const exercise2 = {
  id: "2",
  name: "Chest Dips",
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
};

const exercise3 = {
  id: "3",
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
};

const exercise4 = {
  id: "4",
  name: "Chest Dips",
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
};


export const MY_WORKOUTS: any = {
  workouts: [
    {
      id: "1",
      name: "Getting Strong",
      description: "Getting Strong Description",
      exerises: [
        {
          type: "individual-set",
          exercise: [exercise1],
        },
        {
          type: "super-set",
          exercise: [exercise2, exercise3],
        },
        {
          type: "giant-set",
          exercise: [exercise1, exercise4, exercise2],
        },
      ],
    },
    {
      id: "2",
      name: "15 Day Shredd",
      description: "Getting Strong Description",
      exerises: [
        {
          type: "individual-set",
          exercise: [exercise1],
        },
        {
          type: "super-set",
          exercise: [exercise2, exercise3],
        },
        {
          type: "giant-set",
          exercise: [exercise1, exercise4, exercise2],
        },
      ],
    },
    {
      id: "3",
      name: "Glute Builder",
      description: "Getting Strong Description",
      exerises: [
        {
          type: "individual-set",
          exercise: [exercise1],
        },
        {
          type: "super-set",
          exercise: [exercise2, exercise3],
        },
        {
          type: "giant-set",
          exercise: [exercise1, exercise4, exercise2],
        },
      ],
    },
  ],
};