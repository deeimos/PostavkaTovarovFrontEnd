import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { getClients } from "../server/clients";

const SearchClientsItem = styled.div`
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
    margin-right: 1rem;
    height: 2.5rem;
    width: 8rem;
    border-radius: 0.5rem;
    background-color: #007dff;
    color: #ffffff;
  }

  .control {
    margin-top: 3rem;
    display: flex;
    box-sizing: border-box;
    align-items: center;
    justify-content: space-between;
    padding: 0 5rem;
    height: 3rem;
  }

  h2 {
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

  input {
    display: flex;
    box-sizing: border-box;
    margin-right: 5rem;
    width: 15rem;
    height: 2.9rem;
    background-color: #ffffff;
    color: #000000;
    border: none;
    border-radius: 0.5rem;
    // margin-bottom: 0.25rem;
    padding-left: 0.5rem;
    font-family: Verdana;
    font-size: 1rem;
  }

  input:focus-visible {
    outline-color: #007dff;
  }
`;
const ClientsItem = styled.div`
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
    justify-content: center;
    padding: 0 5rem;
    height: 3rem;
  }

  .control > h2 {
    display: flex;
    font-weight: normal;
    font-size: 3rem;
    margin: 0;
    // margin-right: 10rem;
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

interface IClient {
  address: string;
  email: string;
  name: string;
  phone: string;
}

export const SearchClient = () => {
  const [clientName, setClientName] = useState("");
  const [result, setResult] = useState(Array<IClient>);
  const navigate = useNavigate();

  const handleClick = async () => {
    // navigate(SEARCH_CLIENTS_RESULT_ROUTE + `/${clientName}`, { replace: true });
    const find = "/" + clientName;
    console.log(find);
    getClients(find)
      .then((clients) => {
        // console.log(clients);
        setResult([clients]);
      })
      .catch((error) => {
        alert('Клиент не найден')
        console.log(error);
      });
  };
  
  return result.length == 0 ? (
    <SearchClientsItem>
      <div className="control">
        <h2>Поиск Клиентов</h2>
        <input
          type="text"
          name="searchClient"
          id="searchClient"
          value={clientName}
          onChange={(e) => setClientName(e.target.value)}
          required
        />
        <button onClick={handleClick}>Поиск</button>
      </div>
    </SearchClientsItem>
  ) : (
    <ClientsItem>
      <div className="control">
        <h2>Поиск Клиентов</h2>
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
                <button>Удалить</button>
                <button>Редактировать</button>
              </div>
            </div>
          );
        })}
      </div>
    </ClientsItem>
  );
};
