import axios from 'axios'

export const FETCH_START = "FETCH_START";
export const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS";
export const FETCH_ISSUES_SUCCESS = "FETCH_ISSUES_SUCCESS";
export const FETCH_COMMENTS_SUCCESS = "FETCH_COMMENTS_SUCCESS";
export const FETCH_FAILURE = "FETCH_FAILURE";

export const getUsers = dispatch => {
  dispatch({type: FETCH_START});
  axios.get('https://issue-tracker-be.herokuapp.com/users')
    .then(res => {
      dispatch({type: FETCH_USERS_SUCCESS, payload: res.data})
    }).catch(error => {
    dispatch({type: FETCH_FAILURE, payload: error})
  })
};

export const getIssues = dispatch => {
  dispatch({type: FETCH_START});
  axios.get('https://issue-tracker-be.herokuapp.com/issues')
    .then(res => {
      dispatch({type: FETCH_ISSUES_SUCCESS, payload: res.data})
    }).catch(error => {
    dispatch({type: FETCH_FAILURE, payload: error})
  })
};


export const getComments = dispatch => {
  dispatch({type: FETCH_START});
  axios.get('https://issue-tracker-be.herokuapp.com/comments')
    .then(res => {
      dispatch({type: FETCH_COMMENTS_SUCCESS, payload: res.data})
    }).catch(error => {
    dispatch({type: FETCH_FAILURE, payload: error})
  })
};