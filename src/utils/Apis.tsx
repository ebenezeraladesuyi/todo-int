import axios from "axios";
import { iPaginated } from "../types/interface";


export const getAll = async (data: iPaginated) => {
  try {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/todos`, {
      params: data, 
      // Pass data as the request parameters
    });
    return response.data;
  } catch (error) {
    return error;
  }
};
