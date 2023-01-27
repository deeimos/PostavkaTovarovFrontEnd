import { observer } from "mobx-react-lite";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Context } from "../index";
import { auth } from "../server/user";
import { MENU_ROUTE} from '../utils/const';


const AuthItem = styled.div`
  // display: flex
  position: relative;
  margin: auto;
  width: 30rem;
  height: 20rem;
  background-color: #ffffff;
  border-radius: 2rem;
  box-sizing: border-box;
  -webkit-box-shadow: 0px 0px 25px 1px rgba(34, 60, 80, 0.2);
  -moz-box-shadow: 0px 0px 25px 1px rgba(34, 60, 80, 0.2);
  box-shadow: 0px 0px 25px 1px rgba(34, 60, 80, 0.2);
  padding: 1rem;
  font-family: Verdana;

  h2 {
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: normal;
    font-size: 2rem;
  }

  fieldset {
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  input {
    width: 15rem;
    height: 1.75rem;
    background-color: #d9d9d9;
    color: #000000;
    border: none;
    border-radius: 0.25rem;
    margin-bottom: 0.25rem;
    padding-left: 0.5rem;
    font-family: Verdana;
    font-size: 1rem;
  }

  input:focus-visible {
    outline-color: #007dff;
  }

  button {
    font-family: Verdana;
    font-size: 1rem;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: auto;
    margin-top: 2rem;
    height: 2.5rem;
    width: 8rem;
    border-radius: 0.5rem;
    background-color: #007dff;
    color: #ffffff;
  }
`;

export const Auth = observer(() => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const { user } = useContext(Context);
  const navigate = useNavigate();


  const handleClick = async () => {
    try {
      const userData = await auth(login, password);
      user.SetIsAuth(userData);
      navigate(MENU_ROUTE, {replace: true});
    } catch (e: any) {

      const message = e.response.data.message;
      alert(message);
    }
  };

  return (
    <AuthItem>
      <form action="#" method="post" target="_blank">
        <h2>Авторизация</h2>
        <fieldset>
          <input
            type="text"
            name="login"
            placeholder="Логин"
            id="login"
            value={login}
            onChange={(e) => setLogin(e.target.value)}
            required
          />
        </fieldset>
        <fieldset>
          <input
            type="password"
            name="password"
            placeholder="Пароль"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </fieldset>
        <button type="button" onClick={handleClick}>
          Войти
        </button>
      </form>
    </AuthItem>
  );
});
