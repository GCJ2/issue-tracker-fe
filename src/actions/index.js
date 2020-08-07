import axios from "axios";
import { baseURL } from "../utils/config";

export const FETCH_START = "FETCH_START";
export const FETCH_USER_SUCCESS = "FETCH_USER_SUCCESS";
export const FETCH_CURRENT_USER_SUCCESS = "FETCH_CURRENT_USER_SUCCESS";
export const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS";
export const FETCH_ISSUE_SUCCESS = "FETCH_ISSUE_SUCCESS";
export const FETCH_ISSUES_SUCCESS = "FETCH_ISSUES_SUCCESS";
export const FETCH_COMMENT_SUCCESS = "FETCH_COMMENT_SUCCESS";
export const FETCH_COMMENTS_SUCCESS = "FETCH_COMMENTS_SUCCESS";
export const FETCH_FAILURE = "FETCH_FAILURE";

export const getCurrentUser = (id) => (dispatch) => {
  dispatch({ type: FETCH_START });
  axios
    .get(`${baseURL}/users/${id}`)
    .then((res) => {
      dispatch({ type: FETCH_CURRENT_USER_SUCCESS, payload: res.data });
    })
    .catch((error) => {
      dispatch({ type: FETCH_FAILURE, payload: error });
    });
};

export const getUsers = () => (dispatch) => {
  dispatch({ type: FETCH_START });
  axios
    .get(`${baseURL}/users`)
    .then((res) => {
      dispatch({ type: FETCH_USERS_SUCCESS, payload: res.data });
    })
    .catch((error) => {
      dispatch({ type: FETCH_FAILURE, payload: error });
    });
};

export const getUserById = (id) => (dispatch) => {
  dispatch({ type: FETCH_START });
  axios
    .get(`${baseURL}/users/${id}`)
    .then((res) => {
      dispatch({ type: FETCH_USER_SUCCESS, payload: res.data });
    })
    .catch((error) => {
      dispatch({ type: FETCH_FAILURE, payload: error });
    });
};

export const getIssues = () => (dispatch) => {
  dispatch({ type: FETCH_START });
  axios
    .get(`${baseURL}/issues`)
    .then((res) => {
      dispatch({ type: FETCH_ISSUES_SUCCESS, payload: res.data });
    })
    .catch((error) => {
      dispatch({ type: FETCH_FAILURE, payload: error });
    });
};

export const getIssueById = (id) => (dispatch) => {
  dispatch({ type: FETCH_START });
  axios
    .get(`${baseURL}/issues/${id}`)
    .then((res) => {
      dispatch({ type: FETCH_ISSUE_SUCCESS, payload: res.data });
    })
    .catch((error) => {
      dispatch({ type: FETCH_FAILURE, payload: error });
    });
};

export const getComments = () => (dispatch) => {
  dispatch({ type: FETCH_START });
  axios
    .get(`${baseURL}/comments`)
    .then((res) => {
      dispatch({ type: FETCH_COMMENTS_SUCCESS, payload: res.data });
    })
    .catch((error) => {
      dispatch({ type: FETCH_FAILURE, payload: error });
    });
};

export const getCommentById = (id) => (dispatch) => {
  dispatch({ type: FETCH_START });
  axios
    .get(`${baseURL}/COMMENTS/${id}`)
    .then((res) => {
      dispatch({ type: FETCH_COMMENT_SUCCESS, payload: res.data });
    })
    .catch((error) => {
      dispatch({ type: FETCH_FAILURE, payload: error });
    });
};
