import axios from "axios";
import TaskResponse from "../models/task/TaskResponse";

const updateTask = async (dataType: string, id: string) => {
  try {
    const response = await axios.patch(
      `https://specops-latest.onrender.com/${dataType}/setComplete/${id}`
    );
    const data: TaskResponse = response.data;
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export default updateTask;
