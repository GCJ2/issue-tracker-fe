import React from 'react';
import {Button, Checkbox, Form, Header} from 'semantic-ui-react'


const LandingPage = () => {
  return (
    <div className='main-view'>
      <div className='form-container'>
        <Header as='h1'>Issue Tracker</Header>
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
            <Button type='submit'>Sign In</Button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;