import { Component } from "react";
import RefSample from "./RefSample";
import ValidationSample from "./ValidationSample";
import ScrollBox from "./ScrollBox";

class App extends Component {
  render() {
    console.log("start   ! ");
    return (
      //    <ScrollBox />
      <div>
        <ScrollBox ref={(ref) => (this.ScrollBox = ref)} />
          <button onClick={() => this.ScrollBox.ScrollToBottom() }>맨 밑으로 </button>
      </div>
    );
  }
}

export default App;
