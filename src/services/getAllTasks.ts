import TaskResponse from "../models/task/TaskResponse";
import api from "./api-client";

const getAllTasks = async () => {
  try {
    const response = await api.get("https://specops-latest.onrender.com/tasks");
    const data: TaskResponse[] = response.data;
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export default getAllTasks;
