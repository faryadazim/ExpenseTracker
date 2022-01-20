import React from "react";
import Child from "./Child";
import { GlobalProvider } from "./GlobalContext";

const App = () => {
  return (
    <GlobalProvider>
      <Child />
    </GlobalProvider>
  );
};

export default App;
