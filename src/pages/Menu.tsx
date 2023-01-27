import React from "react";
import styled from "styled-components";
import {
  ADD_CLIENTS_ROUTE,
  CLIENTS_ROUTE,
  SEARCH_CLIENTS_ROUTE,
  PROVIDERS_ROUTE,
  ADD_PROVIDERS_ROUTE,
  SEARCH_PROVIDERS_ROUTE
} from "../utils/const";
import { useNavigate } from "react-router-dom";
import { observer } from "mobx-react-lite";

const MenuItem = styled.div`
  // display: flex;
  position: relative;
  margin: auto;
  width: 80rem;
  height: 45rem;
  box-sizing: border-box;
  padding: 1rem;
  font-family: Verdana;

  h2 {
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: normal;
    font-size: 3rem;
  }

  .box {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .left,
  .right,
  .center {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    height: 20rem;
  }

  .center {
    margin: 0 10rem;
  }

  button {
    font-family: Verdana;
    font-size: 1rem;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: auto;
    height: 2.5rem;
    width: 15rem;
    border-radius: 0.5rem;
    background-color: #007dff;
    color: #ffffff;
  }
`;

export const Menu = observer(() => {
  const navigate = useNavigate();
  const handleClick = (id: number) => {
    switch (id) {
      case 2:
        navigate(CLIENTS_ROUTE, { replace: true });
        break;
      case 3:
        navigate(PROVIDERS_ROUTE, { replace: true });
        break;
      case 7:
        navigate(SEARCH_CLIENTS_ROUTE, { replace: true });
        break;
      case 8:
        navigate(SEARCH_PROVIDERS_ROUTE, { replace: true });
        break;
      case 12:
        navigate(ADD_CLIENTS_ROUTE, { replace: true });
        break;
      case 13:
        navigate(ADD_PROVIDERS_ROUTE, { replace: true });
        break;
      default:
        break;
    }
  };
  return (
    <MenuItem>
      <h2>Меню</h2>
      <div className="box">
        <div className="left">
          <button onClick={() => handleClick(1)}>Заказы</button>
          <button onClick={() => handleClick(2)}>Клиенты</button>
          <button onClick={() => handleClick(3)}>Поставщики</button>
          <button onClick={() => handleClick(4)}>Товары</button>
          <button onClick={() => handleClick(5)}>Прейскурант</button>
        </div>
        <div className="center">
          <button onClick={() => handleClick(6)}>Поиск заказа</button>
          <button onClick={() => handleClick(7)}>Поиск клиента</button>
          <button onClick={() => handleClick(8)}>Поиск поставщика</button>
          <button onClick={() => handleClick(9)}>Поиск товара</button>
          <button onClick={() => handleClick(10)}>Поиск прейскуранта</button>
        </div>
        <div className="right">
          <button onClick={() => handleClick(11)}>Добавить заказ</button>
          <button onClick={() => handleClick(12)}>Добавить клиента</button>
          <button onClick={() => handleClick(13)}>Добавить поставщика</button>
          <button onClick={() => handleClick(14)}>Добавить товар</button>
          <button onClick={() => handleClick(15)}>Добавить прейкурант</button>
        </div>
      </div>
    </MenuItem>
  );
});
