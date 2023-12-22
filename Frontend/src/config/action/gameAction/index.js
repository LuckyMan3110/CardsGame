import axios from "axios";

import {
  GET_SELECT_GAME_DATA_SUCCESS,
  GET_SELECT_GAME_DATA_FAIL,
  CREATE_GAME_DATA_FAIL,
  CREATE_GAME_DATA_SUCCESS,
  SET_USER_GAME_DATA_FAIL, SET_USER_GAME_DATA_SUCCESS
} from './gameActionTypes';

const API_URL = 'http://localhost:5000';

export const getDataOpenGame = (gametype) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(`${API_URL}/games/all_game`, {gameType: gametype});
      dispatch({
        type: GET_SELECT_GAME_DATA_SUCCESS,
        payload: response.data
      });
    } catch (error) {
      dispatch({
        type: GET_SELECT_GAME_DATA_FAIL,
        payload: error.message
      });
    }
  };
};

export const createGameData = (formData, navigate) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(`${API_URL}/games/save_game`, formData);
      dispatch({
        type: CREATE_GAME_DATA_SUCCESS,
        payload: response.data
      });
      navigate("/dashboard");
      return response.data;
    } catch (error) {
      dispatch({
        type: CREATE_GAME_DATA_FAIL,
        payload: error.message
      });
      throw error;
    }
  };
};

export const setUserGameData = (formData, navigate) => {
  return async (dispatch) => {
    try {
      console.log(formData);
      const response = await axios.post(`${API_URL}/games/set_user_data`, formData);
      dispatch({
        type: SET_USER_GAME_DATA_SUCCESS,
        payload: response.data
      });
      navigate("/dashboard");
      return response.data;
    } catch (error) {
      dispatch({
        type: SET_USER_GAME_DATA_FAIL,
        payload: error.message
      });
      throw error;
    }
  };
};