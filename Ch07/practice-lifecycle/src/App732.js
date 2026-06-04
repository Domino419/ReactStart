import {Component } from 'react';
import LifeCycleSample from './LifeCycleSample'


// 랜덤 색상 정하기 
function getRandomColor () {
  return '#' + Math.floor(Math.random() * 16777215).toString(16); 
}

class App extends Component {


  state = {
    color : '#000000'
  }


  hnadleClick = () => {
    this.setState({
      color : getRandomColor() 
    }) ; 
  }

  render() {
    return (
      <div> 
        <button onClick={this.hnadleClick}> 랜덤 색상 </button>
        <LifeCycleSample color={this.state.color}/>
      </div>
    ) ; 
  }

}



export default App;
