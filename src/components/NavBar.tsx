import React, { useContext } from "react";
import { Context } from "../index";
import styled from "styled-components";
import { observer } from "mobx-react-lite";
import { useNavigate } from "react-router-dom";
import { MENU_ROUTE } from "../utils/const";

const NavBarItem = styled.div`
  box-sizing: border-box;
  -webkit-box-shadow: 0px 0px 25px 1px rgba(34, 60, 80, 0.2);
  -moz-box-shadow: 0px 0px 25px 1px rgba(34, 60, 80, 0.2);
  box-shadow: 0px 0px 25px 1px rgba(34, 60, 80, 0.2);
  position: fixed;
  display: flex;
  z-index: 1;
  top: 0%;
  left: 0%;
  width: 100%;
  height: 4rem;
  background-color: #ffffff;
  justify-content: space-between;
  font-family: Verdana;

  .title {
    margin-left: 2rem;
    display: flex;
    height: 100%;
    font-size: 2rem;
    vertical-align: middle;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }

  button {
    font-family: Verdana;
    font-size: 1rem;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: auto;
    margin-right: 2rem;
    height: 2.5rem;
    width: 8rem;
    border-radius: 0.5rem;
    background-color: #007dff;
    color: #ffffff;
  }
`;

export const NavBar = observer(() => {
  const { user } = useContext(Context);
  const navigate = useNavigate();

  const handleClickButton = () => {
    user.LogOut();
  };
  const handleClickTitle = () => {
    navigate(MENU_ROUTE, {replace: true});
  };

  return (
    <NavBarItem>
      <div className="title" onClick={handleClickTitle}>Поставка товаров</div>
      {user.isAuth && <button onClick={handleClickButton}>Выход</button>}
    </NavBarItem>
  );
});
