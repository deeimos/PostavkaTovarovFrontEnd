import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { deleteProvider, getProviders } from "../server/provider";
import { ADD_PROVIDERS_ROUTE, SEARCH_PROVIDERS_ROUTE} from "../utils/const";
// import { observer } from "mobx-react-lite";

const ProvidersItem = styled.div`
  position: relative;
  margin: auto;
  margin-top: 5rem;
  width: 80rem;
  height: 50rem;
  box-sizing: border-box;
  padding: 1rem;
  font-family: Verdana;

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

  .control {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 5rem;
    height: 3rem;
  }

  .control > h2 {
    display: flex;
    font-weight: normal;
    font-size: 3rem;
    margin: 0;
    margin-right: 10rem;
  }
  .control > button {
    display: flex;
    width: 10rem;
    height: 3rem;
    margin: 0;
  }
  .content {
    height: 44rem;
    margin: auto;
    width: 68rem;
    margin-top: 2rem;
    box-sizing: border-box;
    overflow-y: auto;
    ::-webkit-scrollbar {
      height: 1rem;
      width: 0.4rem;
      background: #ffffff;
      -webkit-border-radius: 1ex;
    }

    ::-webkit-scrollbar-thumb {
      background: #000000;
      -webkit-border-radius: 1ex;
    }
  }
  .item {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    margin: auto;
    width: 96%;
    flex-direction: column;
    flex-wrap: wrap;
  }
  .content > .item > table {
    border: 0px;
    width: 100%;
    fonst-size: 3rem;
  }
  .item > table > tr {
    display: flex;
    font-size: 1.25rem;
    justify-content: space-between;
  }
  .item > table > tr > td {
    display: flex;
    margin-bottom: 1.5rem;
    justify-content: center;
    vertical-align: middle;
    padding: 0.5rem;
  }
  .item > table > tr > td:nth-child(2) {
    width: 50%;
    background-color: #ffffff;
    border-radius: 0.5rem;
    padding: 0.5rem;
  }
  .item .itemControl {
    display: flex;
    transform: translateX(19.5rem);
  }
  .content > .item > .itemControl > button {
    width: 10rem;
    margin: 0rem;
    margin-left: 3rem;
    margin-top: 0.5rem;
  }
`;

const ModalBack = styled.div`
  position: fixed;
  backgraound: rgba(0, 0, 0, 128);
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
`;

const Modal = styled.div`
  width: 50rem;
  height: 50rem;
`;

export const UpdateModal = () => {
  return (
    <>
      <ModalBack></ModalBack>
      <Modal></Modal>
    </>
  );
};

interface IProvider {
  _id: string;
  address: string;
  email: string;
  name: string;
  phone: string;
}

export const Providers = () => {
  const [result, setResult] = useState(Array<IProvider>);
  const navigate = useNavigate();

  const handleClick = async (command: string, id: string) => {
    switch (command) {
      case "search":
        navigate(SEARCH_PROVIDERS_ROUTE, { replace: true });
        break;
      case "add":
        navigate(ADD_PROVIDERS_ROUTE, { replace: true });
        break;
      case "delete":
        id = "/" + id;
        console.log("delete", id);
        await deleteProvider(id);
        alert("Поставщик удален из базы");
        break;
      case "update":
        console.log('update');
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    getProviders("")
      .then((providers) => {
        // console.log(clients);
        if (providers.length > 0) setResult(providers);
        else setResult([providers]);
      })
      .catch((error) => {
        console.log(error);
      });
  }, result);

  return (
    <ProvidersItem>
      <div className="control">
        <h2>Список Поставщиков</h2>
        <button onClick={() => handleClick("search", "")}>Поиск</button>
        <button onClick={() => handleClick("add", "")}>Добавить</button>
      </div>
      <div className="content">
        {result.map((Item) => {
          return (
            <div className="item">
              <table>
                <tr>
                  <td>Название компании</td>
                  <td>{Item.name}</td>
                </tr>
                <tr>
                  <td>Адрес</td>
                  <td>{Item.address}</td>
                </tr>
                <tr>
                  <td>Адрес электронной почты</td>
                  <td>{Item.email}</td>
                </tr>
                <tr>
                  <td>Номер телефона</td>
                  <td>{Item.phone}</td>
                </tr>
              </table>
              <div className="itemControl">
                <button onClick={() => handleClick("delete", Item._id)}>
                  Удалить
                </button>
                <button onClick={() => handleClick("update", Item._id)}>
                  Редактировать
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </ProvidersItem>
  );
};
