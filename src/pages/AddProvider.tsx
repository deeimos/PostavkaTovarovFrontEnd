import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { addProvider } from "../server/provider";
import { SEARCH_CLIENTS_ROUTE } from "../utils/const";
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
    justify-content: center;
    padding: 0 5rem;
    height: 3rem;
  }

  .control > h2 {
    display: flex;
    font-weight: normal;
    font-size: 3rem;
    margin: 0;
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
    padding: 0rem;
  }
  .item .itemControl {
    display: flex;
    justify-content: center;
  }
  .content > .item > .itemControl > button {
    width: 10rem;
    margin: 0rem;
    margin-left: 3rem;
    margin-top: 0.5rem;
  }
  input {
    font-size: 1.5rem;
    border: none;
    border-radius: 0.5rem;
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;
    box-sizing: border-box;
  }
  input:focus-visible {
    outline-color: #007dff;
  }
`;

interface IProvider {
  "address": string;
  "email": string;
  "name": string;
  "phone": string;
}

export const AddProvider = () => {
  const navigate = useNavigate();
  const [providerName, setProviderName] = useState("");
  const [providerAddress, setProviderAddress] = useState("");
  const [providerEmail, setProviderEmail] = useState("");
  const [providerPhone, setProviderPhone] = useState("");

  const handleClick = async () => {
    try {
      const providerJSON = {
        "address": providerAddress,
        "email": providerEmail,
        "name": providerName,
        "phone": providerPhone
      };
      await addProvider(providerJSON);
      alert("Поставщик успешно добавлен")
    } catch (e: any) {
      const message = e.response.data.message;
      alert(message);
    }
  };

  return (
    <ProvidersItem>
      <div className="control">
        <h2>Добавить клиента</h2>
      </div>
      <div className="content">
        <div className="item">
          <table>
            <tr>
              <td>Название компании</td>
              <td>
                <input
                  type="text"
                  name="clientName"
                  id="clientName"
                  value={providerName}
                  onChange={(e) => setProviderName(e.target.value)}
                  required
                />
              </td>
            </tr>
            <tr>
              <td>Адрес</td>
              <td>
                <input
                  type="text"
                  name="clientAddress"
                  id="clientAddress"
                  value={providerAddress}
                  onChange={(e) => setProviderAddress(e.target.value)}
                  required
                />
              </td>
            </tr>
            <tr>
              <td>Адрес электронной почты</td>
              <td>
                <input
                  type="text"
                  name="clientEmail"
                  id="clientEmail"
                  value={providerEmail}
                  onChange={(e) => setProviderEmail(e.target.value)}
                  required
                />
              </td>
            </tr>
            <tr>
              <td>Номер телефона</td>
              <td>
                <input
                  type="text"
                  name="clientPhone"
                  id="clientPhone"
                  value={providerPhone}
                  onChange={(e) => setProviderPhone(e.target.value)}
                  required
                />
              </td>
            </tr>
          </table>
          <div className="itemControl">
            <button onClick={handleClick}>Добавить</button>
          </div>
        </div>
      </div>
    </ProvidersItem>
  );
};
