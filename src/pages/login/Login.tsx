import React, { useState } from 'react';
import { useHistory } from 'react-router';
import styled from 'styled-components';
import { Input, Layout } from 'components';

const LoginFormWrapper = styled.div`
  border: 1px solid #ccc; 
  border-radius: 20px;
  box-shadow: 0px 1px 5px 0px black;
  margin: 40px auto 0 auto;
  width: 50vw;
  max-width: 500px;
  min-width: 250px;
  @media screen and (max-width: 425px) {
    width: 100vw;
    max-width: none;
  }
`;

const InfoMessage = styled.div`
  color: red;
`;

const LoginForm = styled.div`
  padding: 130px 35px;
  display: flex;
  flex-direction: column;
  max-width: 500px;
`;

const credentials = {
  login: 'admin',
  password: 'admin',
};

function Login() {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [infoMessage, setInfoMessage] = useState('');

  const history = useHistory();

  function handleLoginChange(ev: React.ChangeEvent<HTMLInputElement>) {
    setLogin(ev.target.value);
    setInfoMessage('');
  }

  function handlePasswordChange(ev: React.ChangeEvent<HTMLInputElement>) {
    setPassword(ev.target.value);
    setInfoMessage('');
  }

  function isValidCredentials() {
    if (!login || !password) {
      setInfoMessage('Not all fields are filled.');
      return false;
    }
    if (login === credentials.login && password === credentials.password) {
      return true;
    }
    setInfoMessage('Invalid login or password. Try again.');
    return false;
  }

  function redirectToMain() {
    const path = '/';
    history.push(path);
  }

  function signIn() {
    setInfoMessage('');
    if (isValidCredentials()) {
      redirectToMain();
    }
  }

  return (
    <Layout>
      <LoginFormWrapper>
        <LoginForm>
          <Input label="Login" onChange={handleLoginChange} />
          <Input label="Password" type="password" onChange={handlePasswordChange} />
          { infoMessage
            && <InfoMessage>{infoMessage}</InfoMessage>}
          {/* <Button onClick={signIn} disabled={!!infoMessage} title="Sign in" /> */}

          {/* Временный костыль */}
          <button type="button" onClick={signIn}>kek</button>
        </LoginForm>
      </LoginFormWrapper>
    </Layout>
  );
}

export default Login;
