import { Component } from "react";

class EventPractice extends Component {
  state = {
    username: "",
    message: ""
  };

  // constructor(props) {
  //   super(props) ; 
  //   this.handleChange = this.handleChange.bind(this) ;
  //   this.handleClick = this.handleClick.bind(this) ;
  // }

  handleChange = (e) =>  {
    console.log("name:", e.target.name, "value:", e.target.value);
    this.setState ({
        [e.target.name] :e.target.value 
       // messega: e.target.value
    }) ; 
  }
 
   handleClick = () => {
    alert(this.state.username + ' :' + this.state.message) ; 
 //   alert(this.state.messega) ; 
    this.setState({
        username: '', 
        message: ''
    }) ; 
  }


  render() {
    return (
      <div>
        <h1> 이벤트 연습 </h1>
        <input
          type="text"
          name="username"
          placeholder="사용자명 "
          value={this.state.username}
          onChange={this.handleChange} 
        />

        <input
          type="text"
          name="message"
          placeholder="아무거나 입력해보세요"
          value={this.state.message}
          onChange={this.handleChange} 
        />

        <button onClick={this.handleClick}> 확인 </button>

      </div>
    );
  }
}

export default EventPractice;
