import React from "react";
import "../App.css";


class Authorization extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: 0,
    };
  }

  render() {
    return  <div className="App">
        <h3>Log In</h3>
        <input></input>
        <input></input>
        <button></button>
    </div>;
  }
}
export default Authorization;
