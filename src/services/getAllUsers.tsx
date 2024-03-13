import api from "./api-client";

const getAllUsers = async () => {
  try {
    const response = await api.get("https://specops-latest.onrender.com/users");
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export default getAllUsers;
