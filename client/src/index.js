import React from "react";
import ReactDOM from "react-dom";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";

import App from "./App";
import "./index.css";

// URL to use when fetching data
const client = new ApolloClient({
  uri: "http://localhost:4000",
});

// Provider expects to receive the client object to be able to connect Apollo to React
ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
