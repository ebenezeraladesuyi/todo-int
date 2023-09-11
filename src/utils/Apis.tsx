import axios from "axios";
import { iPaginated, iUser } from "../types/interface";


// const url = "http://localhost:2023/user"
const url = "https://todo-int-be.onrender.com/user"


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
export const signin = async ({email, password}: any) => {
  return await axios.post(`${url}/signin`, {email,  password})
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

// create task
export const createTask = async (data : iUser, id : any) => {
  try {
    const response = await axios.post(`${url}/createtask/${id}`, data);
    return response.data;
  } catch (error) {
    return error;
  }
};

// edit task
export const editTask = async (data: iUser, userid: any, taskid: any) => {
  return await axios.patch(`${url}/editTask/${userid}/${taskid}`, data)
  .then((res) => {
    return res.data
  })
  .catch((err) => {
    return err
  })
}

// delete task
export const deleteTask = async ( userid: any, taskid: any) => {
  return await axios.delete(`${url}/deleteTask/${userid}/${taskid}`)
  .then((res) => {
    return res.data
  })
  .catch((err) => {
    return err
  })
}