import React from "react";
import "./App.css";
import Main from "./Main";
import GlobalProvider from "./store/GlobalContext";

const App = () => {
  return (
    <GlobalProvider>
      <Main />
    </GlobalProvider>
  );
};

export default App;
