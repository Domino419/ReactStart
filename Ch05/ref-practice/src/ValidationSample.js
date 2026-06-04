import { Component } from "react";
import "./ValidationSample.css";

class ValidationSample extends Component {
  state = {
    password: "",
    clicked: false,
    Validated: false,
  };

  handleChange = (e) => {
    this.setState({
      password: e.target.value,
    });
    console.log("handleChange -- password ! " + this.state.password);
  };

  handleButonClick = () => {
    this.setState({
      clicked: true,
      Validated: this.state.password === "0000",
    });

    console.log({
      msg: "handleButonClick -- 값 확인",
      clicked: this.state.clicked,
      Validated: this.state.Validated,
      password: this.state.password,
    });

    this.input.focus() ; 
  };

  render() {
    return (
      <div>
        <input
          ref={(ref) => (this.input = ref)}
          type="password"
          value={this.state.password}
          onChange={this.handleChange}
          className={
            this.state.clicked
              ? this.state.Validated
                ? "success"
                : "failure"
              : ""
          }
        />
        <button onClick={this.handleButonClick}> 검증하기 </button>
      </div>
    );
  }
}

export default ValidationSample;
