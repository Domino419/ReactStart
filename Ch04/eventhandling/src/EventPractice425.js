import { Component } from "react";

class EventPractice extends Component {
  state = {
    username: "",
    message: ""
  };

  handleChange = (e) =>  {
    console.log("handleChange 호출  --- ");
    //console.log("name:", e.target.name, "value:", e.target.value);
    this.setState ({
        [e.target.name] :e.target.value 
    }) ; 
  }
 
   handleClick = () => {
    console.log("handleClick 호출  --- ");
    alert(this.state.username + ' : ' + this.state.message) ; 
    this.setState({
        username: '', 
        message: ''
    }) ; 
  }

  handleKeyPress = (e) => {
    console.log("handleKeyPress 호출  --- ");
    if(e.key === 'Enter'){
      this.handleClick() ;
    }
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
          onKeyPress={this.handleKeyPress}
        />

        <button onClick={this.handleClick}> 확인 </button>

      </div>
    );
  }
}

export default EventPractice;
