import React from 'react';
import {Button, Checkbox, Form, Header} from 'semantic-ui-react'
// import '../../../assets/pexels-photo-235985.jpeg'
import './LandingPage.scss'

const LandingPage = () => {
  return (
    <div className='main-view'>
      <div className='form-container'>
        <Header as='h1'>Issue Tracker Login</Header>
        <div className='form'>
          <Form>
            <Form.Field>
              <label>Username</label>
              <input placeholder='Username'/>
            </Form.Field>
            <Form.Field>
              <label>Password</label>
              <input placeholder='Password'/>
            </Form.Field>
            <Button className='submit-button' type='submit'>Sign In</Button>
          </Form>
        </div>
        <div className='bottom-content'>
          <p>Create an account</p>
          <p>View Demo</p>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;