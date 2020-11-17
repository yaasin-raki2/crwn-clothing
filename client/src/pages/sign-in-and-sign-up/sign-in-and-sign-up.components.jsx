import React from 'react';

import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';

import { SignInAndSignUpPageConatiner } from './sign-in-and-sign-up.styles';

const SignInAndSignUp = () => (
  <SignInAndSignUpPageConatiner>
    <SignIn />
    <SignUp />
  </SignInAndSignUpPageConatiner>
);

export default SignInAndSignUp;
