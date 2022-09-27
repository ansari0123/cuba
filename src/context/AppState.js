import React, { useState } from "react";
import { AppContext } from "./AppContext";


export const AppState = (props) => {

const [login, setLogin] = React.useState(false);
const [token, setToken] =useState('');

return (
    <AppContext.Provider
      value={{
        login,
        setLogin,
        token,
        setToken
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
