import React, {useState} from 'react';
import {Button, Checkbox, Form, Header} from 'semantic-ui-react'
import auth from '../../utils/authentication'
import {Link} from "react-router-dom";
import './LandingPage.scss'

const LandingPage = () => {

  const [user, setUser] = useState({
    user_name: '',
    password: ''
  });

  const handleChange = (e) => {
    const updatedUser = {...user, [e.target.name]: e.target.value};
    setUser(updatedUser);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    auth.signIn(user)
  };

  return (
    <div className='main-view'>
      <div className='form-container'>
        <Header as='h1'>Issue Tracker Login</Header>
        <div className='form'>
          <Form onSubmit={handleSubmit}>
            <Form.Field className='form-field'>
              <input type='text'
                     name='user_name'
                     placeholder='Username'
                     value={user.user_name}
                     onChange={handleChange}/>
            </Form.Field>
            <Form.Field>
              <input type='password'
                     name='password'
                     placeholder='Password'
                     value={user.password}
                     onChange={handleChange}/>
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