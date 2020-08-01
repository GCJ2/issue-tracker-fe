import {
  FETCH_START,
  FETCH_USER_SUCCESS,
  FETCH_USERS_SUCCESS,
  FETCH_ISSUE_SUCCESS,
  FETCH_ISSUES_SUCCESS,
  FETCH_COMMENT_SUCCESS,
  FETCH_COMMENTS_SUCCESS,
  FETCH_FAILURE
} from "../actions";

const initialState = {
  user: null,
  users: [],
  issue: null,
  issues: [],
  comment: null,
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
    case FETCH_USER_SUCCESS:
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
    case FETCH_ISSUE_SUCCESS:
      return {
        ...state,
        isFetching: false,
        issue: action.payload
      };
    case FETCH_ISSUES_SUCCESS:
      return {
        ...state,
        isFetching: false,
        issues: action.payload
      };
    case FETCH_COMMENT_SUCCESS:
      return {
        ...state,
        isFetching: false,
        comment: action.payload
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