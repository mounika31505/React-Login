import React from 'react';
import './App.css';
import { LoginForm, LoginContainer, LeftGrid, RightGrid, Image, LoginInput, LoginButton, FormControl, FormLabel, JustifyContainer, UnstyledAnchor, ColoredAnchor, Hidepassword, Checkboxtext, CheckBox } from './Styled.js';
import loginimage from "./assets/images/Loginimage.png"
import eyeSlash from "./assets/images/bi_eye-slash-fill.svg"
const Login = () => {
  return (
    <LoginContainer>
      <LeftGrid>
        <Image src={loginimage} alt="Login Image" />
      </LeftGrid>
      <RightGrid>
        <LoginForm>
          <h2>Login</h2>
          <FormControl>
            <FormLabel htmlFor="email">Login Id</FormLabel>
            <LoginInput id="email" type="text" placeholder="Enter Login id" />
          </FormControl>
          <FormControl className="relative">
            <FormLabel htmlFor="password">Password</FormLabel>
            <LoginInput id="password" type="password" placeholder="Enter Password" />
            <Hidepassword src={eyeSlash} alt="eye-slash" />
            <JustifyContainer>
              <FormLabel htmlFor="rememberme">
                <CheckBox id="rememberme" type="checkbox" /><Checkboxtext>Remember Me</Checkboxtext>
              </FormLabel>
              <UnstyledAnchor href="/">Change password</UnstyledAnchor>
            </JustifyContainer>
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="termsnconditions">
              <CheckBox id="termsnconditions" type="checkbox" /><Checkboxtext>Agree to </Checkboxtext><ColoredAnchor href="/">Terms & Conditions</ColoredAnchor>
            </FormLabel>
          </FormControl>
          <LoginButton type="submit">Login</LoginButton>
        </LoginForm>
        <p>Don't have an account? <ColoredAnchor href="/" >Register Here</ColoredAnchor></p>
      </RightGrid>
    </LoginContainer>
  );
};

export default Login;