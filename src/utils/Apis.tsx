import axios from "axios";
import { iPaginated, iUser } from "../types/interface";


const url = "http://localhost:2023/user"


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

// signup
export const signup = async (data : iUser) => {
  return await axios.post(`${url}/signup`, data)
  .then((res) => {
    return res.data
  })
  .catch ((err) => {
    return err
  })
}

// signin
export const signin = async (data : iUser) => {
  return await axios.post(`${url}/signin`, data)
  .then((res) => {
    return res.data
  })
  .catch((err) => {
    return err
  })
}

// get one user
export const getOneUser = async (id : any) => {
  return await axios
        .get(`${url}/getoneuser/${id}`)
        .then((res) => {
          return res.data
        })
}