import RecordResponse from "../models/record/RecordResponse";
import api from "./api-client";

const getAllRecords = async () => {
  try {
    const response = await api.get(
      "https://specops-latest.onrender.com/tasks/history"
    );
    const data: RecordResponse[] = response.data;
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export default getAllRecords;
