import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { UserStore } from "./stores/UserStore";


export const Context = createContext(null as any);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <Context.Provider value={{user: new UserStore()}}>
      <App />
    </Context.Provider>
  </React.StrictMode>
);
