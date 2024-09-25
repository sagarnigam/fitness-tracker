const WORKOUT_PROGRAM_API_URL = "http://10.0.2.2:5001/api/workoutprograms/";
const PROGRAM_STRUCTURE_API_URL = "http://10.0.2.2:5001/api/programStructure/workoutprogramid/";

// Function to get exercises according to the body part
export const getWorkoutPrograms = async () => {
  try {
    const response = await fetch(WORKOUT_PROGRAM_API_URL, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch workout programs. Status: " + response.status);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching workout programs:", error);
    throw error;
  }
};


// Function to get program structure by day
export const getProgramStructureByDay = async (workoutProgramId, day) => {
  let finalUrl = `${PROGRAM_STRUCTURE_API_URL}${workoutProgramId}/day/${day}`;
  try {
    const response = await fetch(finalUrl, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch workout programs. Status: " + response.status);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching workout programs:", error);
    throw error;
  }
};
