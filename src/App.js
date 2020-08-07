import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Route, Link } from "react-router-dom";
import {
  getUserById,
  getUsers,
  getIssues,
  getCommentById,
  getComments,
  getIssueById,
} from "./actions";
import PrivateRoute from "./utils/PrivateRoute";
import LandingPage from "./components/LandingPage/LandingPage";
import Register from "./components/Register/Register";
import Dashboard from "./components/Dashboard/Dashboard";
import ManageUserRolls from "./components/ManageUserRolls/ManageUserRolls";
import ManageIssues from "./components/ManageIssues/ManageIssues";

function App({
  getUserById,
  getUsers,
  getIssues,
  getComments,
  getIssueById,
  isFetching,
  getCommentById,
}) {
  // useEffect(() => {
  //   getUsers();
  //   getIssues();
  //   getComments();
  //   getIssueById(1);
  //   getUserById(1);
  //   getCommentById(34);
  // }, []);

  return (
    <div className="App">
      <Route exact path="/" component={LandingPage} />
      <Route exact path="/register" component={Register} />
      {/* <Route exact path='/dashboard' component={Dashboard}/> */}
      <PrivateRoute exact path="/dashboard" component={Dashboard} />
      <Route exact path="/userrolls" component={ManageUserRolls} />
      <Route exact path="/manageissues" component={ManageIssues} />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
    users: state.users,
    issues: state.issues,
    issue: state.issue,
    isFetching: state.isFetching,
  };
};

// export default App;
export default connect(mapStateToProps, {
  getUsers,
  getIssues,
  getComments,
  getIssueById,
  getUserById,
  getCommentById,
})(App);
