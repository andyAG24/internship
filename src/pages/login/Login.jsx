import React, { useState } from 'react';
import { useHistory } from 'react-router';
import styled from 'styled-components';
// eslint-disable-next-line import/no-unresolved
import { Input, Button } from 'components';

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

const cridentials = {
  login: 'admin',
  password: 'admin',
};

function Login() {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [infoMessage, setInfoMessage] = useState('');
  const [isDisabledButton, setIsDisabledButton] = useState(false);

  const history = useHistory();

  function handleLoginChange(ev) {
    setLogin(ev.target.value);
    setIsDisabledButton(false);
    setInfoMessage('');
  }

  function handlePasswordChange(ev) {
    setPassword(ev.target.value);
    setIsDisabledButton(false);
    setInfoMessage('');
  }

  function isValidatedCridentials() {
    if (!login || !password) {
      setInfoMessage('Не все поля заполнены.');
      return false;
    }
    if (login === cridentials.login && password === cridentials.password) {
      return true;
    }
    setInfoMessage('Неправильный логин или пароль. Попробуйте еще раз.');
    return false;
  }

  function redirectToMain() {
    const path = 'main';
    history.push(path);
  }

  function signIn() {
    setInfoMessage('');
    if (!isValidatedCridentials()) setIsDisabledButton(true);
    if (isValidatedCridentials()) redirectToMain();
  }

  return (
    <LoginFormWrapper>
      <LoginForm>
        <Input label='Логин' name='login' onChange={handleLoginChange} />
        <Input label='Пароль' name='password' type='password' onChange={handlePasswordChange} />
        { infoMessage
          && <InfoMessage>{infoMessage}</InfoMessage>}
        <Button onClick={signIn} disabled={isDisabledButton} title='Войти' />
      </LoginForm>
    </LoginFormWrapper>
  );
}

export default Login;
