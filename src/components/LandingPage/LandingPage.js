import React from 'react';
import {Button, Checkbox, Form, Header} from 'semantic-ui-react'
import './LandingPage.scss'
import {Link} from "react-router-dom";

const LandingPage = () => {
  return (
    <div className='main-view'>
      <div className='form-container'>
        <Header as='h1'>Issue Tracker Login</Header>
        <div className='form'>
          <Form>
            <Form.Field className='form-field'>
              <input placeholder='Username'/>
            </Form.Field>
            <Form.Field>
              <input placeholder='Password'
                     type='password'/>
            </Form.Field>
            <Button className='submit-button' type='submit'>Sign In</Button>
          </Form>
        </div>
        <div className='bottom-content'>
          <p>Create an <Link to='register'>account </Link></p>
          <p>View Demo</p>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;