import React from "react";
import "../App.css";

const url =
  process.env.NODE_ENV === "development"
    ? process.env.REACT_APP_API_LOCAL_URL
    : "https://coffe-counter-backend.herokuapp.com";

class Registration extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      emailInputValue: "",
      passwordInputValue: "",
    };
  }

  handleEmailInput = (event) => {
    this.setState({ emailInputValue: event.target.value });
  };

  handlePasswordInput = (event) => {
    this.setState({ passwordInputValue: event.target.value });
  };

  handleClick = () => {
    const { emailInputValue, passwordInputValue } = this.state;
    fetch(`${url}/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: emailInputValue,
        password: passwordInputValue,
      }),
    })
      .then((response) => response.json())
      .then((information) => {
        console.kog(information);
      })
      .then(this.setState({ emailInputValue: "", passwordInputValue: "" }));
  };

  render() {
    return (
      <div className="App">
        <h3>Create account</h3>
        <input
          autoFocus
          value={this.state.emailInputValue}
          onChange={(event) => this.handleEmailInput(event)}
        ></input>
        <input
          autoFocus
          value={this.state.passwordInputValue}
          onChange={(event) => this.handlePasswordInput(event)}
        ></input>
        <button onClick={() => this.handleClick()}></button>
      </div>
    );
  }
}
export default Registration;
