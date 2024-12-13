import axios from "./axios";

export const createMessages = async (formData) => {
  try {
    const response = await axios.post("/contactUs", formData);
    return response.data;
  } catch (error) {
    throw error.response?.data?.error || "Something went wrong.";
  }
};

export const getMessages = async () => {
  try {
    const response = await axios.get("/contactUs");
    return response.data;
  } catch (error) {
    throw error.response?.data?.error || "Something went wrong.";
  }
};