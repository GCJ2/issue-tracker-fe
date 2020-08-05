import React, {useState} from 'react';
import {Button, Checkbox, Form, Header} from 'semantic-ui-react'
import auth from '../../utils/authentication'
import {Link, useHistory} from "react-router-dom";
import './LandingPage.scss'

const LandingPage = (props) => {

  const history = useHistory();

  const [user, setUser] = useState({
    user_name: '',
    password: ''
  });

  const [errors, setErrors] = useState('');
  const [loggingIn, setLoggingIn] = useState(false);

  const handleChange = (e) => {
    setErrors('');
    const updatedUser = {...user, [e.target.name]: e.target.value};
    setUser(updatedUser);
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log(user)
  //   if (!user.user_name || !user.password) {
  //     setErrors('Username and password are required.')
  //   } else {
  //     setLoggingIn(true);
  //     auth.signIn(user)
  //       .then(() => {
  //         setLoggingIn(false);
  //         history.push('/dashboard')
  //       })
  //   }
  // };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user)
      setLoggingIn(true);
      auth.signIn(user)
        .then(() => {
          setLoggingIn(false);
          history.push('/dashboard')
        })
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
          {errors ? <p className='error-message'>{errors}</p> : null}
        </div>
      </div>
    </div>
  );
};

export default LandingPage;