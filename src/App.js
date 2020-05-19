import React from "react";
import Form from "./comp/Form";
import { Route, Link, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div className="nav-links">
        <h3> LambdaEats </h3>
        <div className="actual-links">
          <Link to="/">Home</Link>
          <Link to="/pizza">Order Pizza</Link>
        </div>
      </div>

      <Switch>
        <Route path="/pizza">
          <Form />
        </Route>
        <Route
          path="/pizza"
          render={(props) => {
            return null;
          }}
        />
        <Route path="/" />
      </Switch>
    </div>
  );
}

export default App;
