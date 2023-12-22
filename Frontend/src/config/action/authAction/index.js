import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import {jwtDecode} from "jwt-decode";
import setAuthToken from "../../../utils/setAuthToken.jsx";

export const loginUser = createAsyncThunk(
  "user/loginUser",
  async (user, thunkAPI) => {
    try {
      const response = await axios.post('http://localhost:5000/auth/signin', {
        email: user.email,
        password: user.password
      });
      const { token } = response.data;
      localStorage.setItem("jwtToken", token);
      setAuthToken(token);
      const decode = jwtDecode(token);

      return decode;
    } catch (error) {
      if (error.response) {
        const message = error.response.data.msg;
        return thunkAPI.rejectWithValue(message);
      }
    }
  }
);

export const signupUser = createAsyncThunk(
  "user/signupUser",
  async (user, thunkAPI) => {
    try {
      const response = await axios.post('http://localhost:5000/auth/signup', {
        user_name: user.username,
        email: user.mail,
        password: user.password,
        reEnteredpassword: user.password2
      });
      
      return response.data;
    } catch (error) {
      if (error.response) {
        const message = error.response.data.msg;
        console.log(message);
        return thunkAPI.rejectWithValue(message);
      }
    }
  }
);

export const verifyUser = createAsyncThunk(
  "user/verifyUser",
  async (user, thunkAPI) => {
    try {
      const response = await axios.post('http://localhost:5000/auth/verify', {
        verifycode: user.verifycode
      });
      
      return response.data;
    } catch (error) {
      if (error.response) {
        const message = error.response.data.msg;
        return thunkAPI.rejectWithValue(message);
      }
    }
  }
);

export const getMe = createAsyncThunk("user/getMe", async (_, thunkAPI) => {
  try {
    const response = await axios.get('http://localhost:5000/auth/me');
    return response.data;
  } catch (error) {
    if (error.response) {
      const message = error.response.data.msg;
      return thunkAPI.rejectWithValue(message);
    }
  }
});

export const logoutUser = createAsyncThunk("user/logoutUser", async () => {
  try {
    localStorage.removeItem("jwtToken");
    // Remove the auth header for future requests
    setAuthToken(false);
    // store.dispatch(getMe);
  } catch (error) {
    if (error.response) {
      const message = error.response.data.msg;
      return thunkAPI.rejectWithValue(message);
    }
  }
});
