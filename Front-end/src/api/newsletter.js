import axios from "./axios";

export const createNewsletters = async (formData) => {
  try {
    const response = await axios.post("/newsletters", formData);
    return response.data;
  } catch (error) {
    throw error.response?.data?.error || "Something went wrong.";
  }
};

export const getNewsletters = async () => {
  try {
    const response = await axios.get("/newsletters");
    return response.data;
  } catch (error) {
    throw error.response?.data?.error || "Something went wrong.";
  }
};