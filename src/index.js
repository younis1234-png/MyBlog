import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "./assets/scss/base.scss";
import "antd/dist/antd.css";
import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloProvider } from "@apollo/react-hooks";
import "@quasar/extras/ionicons-v4/ionicons-v4.css";

const cache = new InMemoryCache();
const client = new ApolloClient({
  cache,
  link: "http://localhost:4000/graphql ",
});

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
