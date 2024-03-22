import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
} from "@apollo/client";
import { SaasProvider } from "@saas-ui/react";

const client = new ApolloClient({
  uri: "http://localhost:6969/graphql",
  cache: new InMemoryCache(),
});

// https://countries.trevorblades.com/graphql

// https: client
//   .query({
//     query: gql`
//       query Query {
//         country(code: "BR") {
//           name
//           native
//           capital
//           emoji
//           currency
//           languages {
//             code
//             name
//           }
//         }
//       }
//     `,
//   })
//   .then((result) => console.log(result));

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider>
      <SaasProvider>
        <BrowserRouter>
          <ApolloProvider client={client}>
            <App />
          </ApolloProvider>
        </BrowserRouter>
      </SaasProvider>
    </ChakraProvider>
  </React.StrictMode>
);
