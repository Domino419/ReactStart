import { Component } from "react";

class EventPractice extends Component {
  state = {
    messega: "",
  };

  constructor(props) {
    super(props) ; 
    this.handleChange = this.handleChange.bind(this) ;
    this.handleClick = this.handleClick.bind(this) ;
  }

  handleChange(e) {
    this.setState ({
        messega: e.target.value
    }) ; 
  }
 
   handleClick() {
    alert(this.state.messega) ; 
    this.setState({
        messega: ''
    }) ; 
  }


  render() {
    return (
      <div>
        <h1> 이벤트 연습 </h1>

        <input
          type="text"
          name="message"
          placeholder="아무거나 입력해보세요"
          value={this.state.messega}
          onChange={this.handleChange} 
        ></input>

        <button onClick={this.handleClick}> 확인 </button>
      </div>
    );
  }
}

export default EventPractice;
