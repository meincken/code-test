import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import styled from "styled-components";
import { device } from "./helpers";

import Home from "./pages/home/";
import Category from "./pages/category/";
import Recipe from "./pages/recipes/";

const Main = styled.main`
  display: grid;
  height: auto;
  margin: 0 auto;
  position: relative;
  width: 75%;

  @media ${device.laptop} {
    max-width: 720px;
    width: 90%;
  }

  div {
    text-align: center;

    p {
      text-align: left;
    }
  }
`;

function App() {
  return (
    <Router>
      <Main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/categories/:slug" component={Category} />
          <Route path="/recipe/:id" component={Recipe} />
        </Switch>
      </Main>
    </Router>
  );
}

export default App;
