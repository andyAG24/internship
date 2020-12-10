import React, { useState } from 'react';
import { useHistory } from 'react-router';
import styled from 'styled-components';
import { Input, Button, Layout } from 'components';

const LoginFormWrapper = styled.div`
  border-radius: 20px;
  box-shadow: 0px 2px 20px 0px black;
  margin: 40px auto 0 auto;
  max-width: 400px;
  min-width: 200px;
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

  function handleLoginChange(ev) {
    setLogin(ev.target.value);
    setInfoMessage('');
  }

  function handlePasswordChange(ev) {
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
    if (isValidCredentials()) redirectToMain();
  }

  return (
    <Layout>
      <LoginFormWrapper>
        <LoginForm>
          <Input label="Login" name="login" onChange={handleLoginChange} />
          <Input label="Password" name="password" type="password" onChange={handlePasswordChange} />
          { infoMessage
            && <InfoMessage>{infoMessage}</InfoMessage>}
          <Button onClick={signIn} disabled={!!infoMessage} title="Sign in" />
        </LoginForm>
      </LoginFormWrapper>
    </Layout>
  );
}

export default Login;
