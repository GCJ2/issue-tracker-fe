import {
  FETCH_START,
  FETCH_USER,
  FETCH_USERS_SUCCESS,
  FETCH_ISSUES_SUCCESS,
  FETCH_COMMENTS_SUCCESS,
  FETCH_FAILURE
} from "../actions";

const initialState = {
  user: null,
  users: [],
  issues: [],
  comments: [],
  isFetching: false,
  error: ''
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_START:
      return {
        ...state,
        isFetching: true
      };
    case FETCH_USER:
      return {
        ...state,
        user: action.payload
      };
    case FETCH_USERS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        users: action.payload
      };
    case FETCH_ISSUES_SUCCESS:
      return {
        ...state,
        isFetching: false,
        issues: action.payload
      };
    case FETCH_COMMENTS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        comments: action.payload
      };
    case FETCH_FAILURE:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state
  }
};

export default reducer;