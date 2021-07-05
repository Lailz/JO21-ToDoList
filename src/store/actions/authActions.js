import decode from "jwt-decode";
import instance from "./instance";
import * as actionTypes from "./types";

export const signup = (userData) => {
  return async (dispatch) => {
    try {
      const res = await instance.post("/signup", userData);
      dispatch(setUser(res.data.token));
    } catch (error) {
      console.log(error);
    }
  };
};
export const signin = (userData) => {
  return async (dispatch) => {
    try {
      const res = await instance.post("/signin", userData);
      dispatch(setUser(res.data.token));
    } catch (error) {
      console.log(error);
    }
  };
};

export const signout = () => {
  return setUser();
};

export const checkForToken = () => {
  const token = localStorage.getItem("myToken");
  if (token) {
    // Check if token is expired
    const currentTime = Date.now();
    const user = decode(token);
    if (user.exp > currentTime) {
      // if the token is not expired
      return setUser(token);
    } else {
      return setUser();
    }
  }
};

const setUser = (token) => {
  if (token) {
    localStorage.setItem("myToken", token);
    return {
      type: actionTypes.SET_USER,
      payload: decode(token),
    };
  } else {
    localStorage.removeItem("myToken");
    return {
      type: actionTypes.SET_USER,
      payload: null,
    };
  }
};