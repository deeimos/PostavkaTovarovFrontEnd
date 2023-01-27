import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { BrowserRouter } from "react-router-dom";
import { Context } from ".";
import { AppRouter, NavBar } from "./components";
import { check } from "./server/user";
import { $authHost } from "./server";

const App = observer(() => {
  const { user } = useContext(Context);

  const checkAuth = async () => {
    const userData = await check();
    return userData;
  };
  console.log($authHost.interceptors.request);
  if (!user.isLogOut) {
    user.ReloadPage(checkAuth);
  }
  return (
    <BrowserRouter>
      <NavBar />
      <AppRouter />
    </BrowserRouter>
  );
});

export default App;
