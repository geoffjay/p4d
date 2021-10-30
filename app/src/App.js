import React from "react";
import { MemoryRouter, Route, Switch } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";

import { DefaultLayout as Layout } from "./layouts";
import { ConfigurationPage, DashboardPage, PreferencesPage } from "./pages";

import theme from "./theme";

import "./App.css";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <MemoryRouter>
        <Layout>
          <Switch>
            <Route exact path="/" component={DashboardPage} />
            <Route exact path="/configuration" component={ConfigurationPage} />
            <Route path="/preferences" component={PreferencesPage} />
          </Switch>
        </Layout>
      </MemoryRouter>
    </ChakraProvider>
  );
}

export default App;
