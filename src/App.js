import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux'
import {
  getUserById,
  getUsers,
  getIssues,
  getCommentById,
  getComments,
  getIssueById
} from "./actions";

import './App.css';


function App({getUserById, getUsers, getIssues, getComments, getIssueById, isFetching, getCommentById}) {

  useEffect(() => {
    getUsers();
    getIssues();
    getComments();
    getIssueById(1);
    getUserById(1);
    getCommentById(34);
  }, []);


  return (
    <div className="App">
      {isFetching ? <p>Fetching...</p> : <p>Fetched!</p>}
    </div>
  );
}

const mapStateToProps = state => {
  return {
    user: state.user,
    users: state.users,
    issues: state.issues,
    issue: state.issue,
    isFetching: state.isFetching
  }
};

// export default App;
export default connect(mapStateToProps, {getUsers, getIssues, getComments, getIssueById, getUserById, getCommentById})(App)