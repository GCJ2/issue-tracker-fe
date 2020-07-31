import {
  FETCH_START,
  FETCH_USERS_SUCCESS,
  FETCH_ISSUES_SUCCESS,
  FETCH_COMMENTS_SUCCESS,
  FETCH_FAILURE
} from "../actions";

const initialState = {
  currentUser: null,
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
    default:
      return state
  }
};

export default reducer;