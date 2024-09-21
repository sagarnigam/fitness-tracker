const API_URL = "http://10.0.2.2:5001/api/exercises/";

// Function to get all exercises
export const getExercises = async () => {
  try {
    const response = await fetch(API_URL, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch exercises. Status: " + response.status);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching exercises:", error);
    throw error;
  }
};
