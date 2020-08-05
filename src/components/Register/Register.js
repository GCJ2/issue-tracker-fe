import React, {useState} from 'react';
import {Button, Form, Header} from "semantic-ui-react";
import {Link} from "react-router-dom";
import auth from "../../utils/authentication";


const Register = () => {
  const [user, setUser] = useState({
    user_name: '',
    first_name: '',
    last_name: '',
    password: ''
  });

  const [passwordConfirm, setPasswordConfirm] = useState('');

  const handleChange = (e) => {
    const updatedUser = {...user, [e.target.name]: e.target.value};
    setUser(updatedUser);
  };

  const handlePasswordConfirm = (e) => {
    setPasswordConfirm(e.target.value);
    console.log('passwordConfirm:', passwordConfirm)
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user)
  };


  return (
    <div className='main-view'>
      <div className='form-container'>
        <Header as='h1'>Register</Header>
        <div className='form'>
          <Form onSubmit={handleSubmit}>
            <Form.Field className='form-field'>
              <input type='text'
                     placeholder='Username'
                     name='user_name'
                     value={user.user_name}
                     onChange={handleChange}/>
            </Form.Field>
            <Form.Field className='form-field'>
              <input type='text'
                     placeholder='First Name'
                     name='first_name'
                     value={user.first_name}
                     onChange={handleChange}/>
            </Form.Field>
            <Form.Field className='form-field'>
              <input type='text'
                     placeholder='Last Name'
                     name='last_name'
                     value={user.last_name}
                     onChange={handleChange}/>
            </Form.Field>
            <Form.Field className='form-field'>
              <input type='password'
                     name='password'
                     placeholder='Password'
                     value={user.password}
                     onChange={handleChange}/>
            </Form.Field>
            <Form.Field className='form-field'>
              <input type='password'
                     name='password'
                     placeholder='Password Confirm'
                     value={passwordConfirm}
                     onChange={handlePasswordConfirm}/>
            </Form.Field>
            <Button className='submit-button' type='submit'>Register</Button>
          </Form>
        </div>
        <p>Back to <Link to='/'>Log In</Link></p>
      </div>
    </div>
  );
};

export default Register;