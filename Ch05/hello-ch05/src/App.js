import  { Component } from 'react';
import ValidationSample from "./ValidationSample";

class App extends Component {
    render() {
        console.log("::::::::::::::::::::::::: Ch05 - 실행 환경 : " ,  process.env.NODE_ENV);
        console.log("::::::::::::::::::::::::: App.js ");

        return (
          <ValidationSample/>
        );
    }
}

export default App ;
