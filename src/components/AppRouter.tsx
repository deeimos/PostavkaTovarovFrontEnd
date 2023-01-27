import React, { useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { Context } from "../index";
import { authRoutes, publicRoutes } from "../routes";
import { AUTH_ROUTE, MENU_ROUTE } from "../utils/const";
import { observer } from "mobx-react-lite";

export const AppRouter = observer(() => {
  const { user } = useContext(Context);

  return (
    <Routes>
      {user.isAuth &&
        authRoutes.map(({ path, Component }) => (
          <Route key={path} path={path} element={<Component />} />
        ))}
      {!user.isAuth &&
        publicRoutes.map(({ path, Component }) => (
          <Route key={path} path={path} element={<Component />} />
        ))}
      {/* {user.isAuth && <Route path="*" element={<Navigate to={MENU_ROUTE} />} />} */}
      {!user.isAuth && (
        <Route path="*" element={<Navigate to={AUTH_ROUTE} />} />
      )}
    </Routes>
  );
});
