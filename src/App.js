import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux'
import {getUsers, getIssues, getComments} from "./actions";

import './App.css';


function App({getUsers, getIssues, getComments}) {

  useEffect(() => {
    getUsers();
    getIssues();
    getComments();
  }, []);


  return (
    <div className="App">
      Hello
    </div>
  );
}

const mapStateToProps = state => {
  return {
    users: state.users,
    issues: state.issues
  }
};

// export default App;
export default connect(mapStateToProps, {getUsers, getIssues, getComments})(App)