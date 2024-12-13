import axios from "./axios";

export const createInquiry = async (formData) => {
  try {
    const response = await axios.post("/inquiry", formData);
    return response.data;
  } catch (error) {
    throw error.response?.data?.error || "Something went wrong.";
  }
};

export const getInquiries = async () => {
  try {
    const response = await axios.get("/inquiry");
    return response.data;
  } catch (error) {
    throw error.response?.data?.error || "Something went wrong.";
  }
};
