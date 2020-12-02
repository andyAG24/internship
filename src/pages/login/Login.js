import React, { useState } from 'react';
import { useHistory } from 'react-router';
import styled from 'styled-components';
import { Input, Button } from '../../components';

const Wrapper = styled.div`
    // font-size: 20px;
    width: 400px;
    border-radius: 20px;
    box-shadow: 0px 2px 20px 0px black;
    margin: 40px auto 0 auto;

`;

const InfoMessage = styled.div`
    color: red;
`;

const Container = styled.div`
    padding: 130px 35px;
`;

const cridentials = {
    login: 'admin',
    password: 'admin'
}

function Login() {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [infoMessage, setInfoMessage] = useState('');

    const history = useHistory();

    function handleLoginChange(ev) {
        let login = ev.target.value;
        setLogin(login);
    }

    function handlePasswordChange(ev) {
        let password = ev.target.value;
        setPassword(password);
    }

    function isValidatedCridentials() {
        if ((login !== '') && (password !== '')) {
            if ((login !== cridentials.login) || (password !== cridentials.password)) {
                setInfoMessage('Неправильный логин или пароль. Попробуйте еще раз.');
                return false;
            } else {
                return true;
            }
        } else {
            setInfoMessage('Не все поля заполнены.');
            return false;
        }
    }

    function redirectToMain() {
        let path = `main`;
        history.push(path);
    }

    function signIn() {
        setInfoMessage('');
        isValidatedCridentials() && redirectToMain();
    }


    return (
        <Wrapper>
            <Container>
                <Input label='Логин' name='login' onChange={handleLoginChange} />
                <Input label='Пароль' name='password' type='password' onChange={handlePasswordChange} />
                { infoMessage !== '' &&
                    <InfoMessage>{infoMessage}</InfoMessage>
                }
                <Button onClick={signIn} title='Войти' />
            </Container>
        </Wrapper>
    );
}

export default Login;