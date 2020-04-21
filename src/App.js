import React from "react";
import "./App.css";
import Counter from "../src/Counter";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Authorization from "./screens/authorization";
import Registration from "./screens/registration";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className={"App-links"}>
          <button>
            <Link to={"/registration"}>Registration</Link>
          </button>
          <button>
            <Link to={"/authorization"}>Authorization</Link>
          </button>
          <button>
            <Link to={"/counter"}>Counter</Link>
          </button>
        </div>
        <div className={"App"}>
          <Route path={"/authorization"} component={Authorization} />
          <Route path={"/registration"} component={Registration} />
          <Route path={"/counter"} component={Counter} />
        </div>
      </Router>
    );
  }
}

export default App;
