import axios from "axios";

const getAll = async (dataType: string) => {
  try {
    const response = await axios.get(
      `https://specops-latest.onrender.com/${dataType}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export default getAll;
