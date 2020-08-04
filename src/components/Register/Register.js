import React from 'react';
import {Button, Form, Header} from "semantic-ui-react";
import {Link} from "react-router-dom";


const Register = () => {
  return (
    <div className='main-view'>
      <div className='form-container'>
        <Header as='h1'>Register</Header>
        <div className='form'>
          <Form>
            <Form.Field className='form-field'>
              <input placeholder='Username'/>
            </Form.Field>
            <Form.Field className='form-field'>
              <input placeholder='Password'
                     type='password'/>
            </Form.Field>
            <Form.Field>
              {/*<label>Password Confirm</label>*/}
              <input placeholder='Password Confirm'
                     type='password'/>
            </Form.Field>
            <Button className='submit-button' type='submit'>Register</Button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Register;