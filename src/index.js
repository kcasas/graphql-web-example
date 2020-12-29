import React from "react";
import { render } from "react-dom";
import Books from "./Books";
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { hot } from 'react-hot-loader/root';
import "./styles.css";
import process from "process";

const client = new ApolloClient({
  uri: process.env.GRAPHQL_API,
  cache: new InMemoryCache()
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div>
        <Books />
      </div>
    </ApolloProvider>
  );
}

const HotApp = hot(App)

render(<HotApp />, document.getElementById('app'));