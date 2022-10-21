import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import store from "./features/store";
import { Provider } from "react-redux";
import { ChakraProvider, theme } from "@chakra-ui/react";

import App from "./App";

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <ChakraProvider theme={theme}>
        <Provider store={store}>
          <App />
        </Provider>
      </ChakraProvider>
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById("root")
);
