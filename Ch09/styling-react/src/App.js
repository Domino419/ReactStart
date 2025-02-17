import  { Component } from 'react';
import './App.css'
import SassComponent from './SassComponent';
import CssModule from './CSSModule';

class App extends Component {
  render() {
    return (
      <div>
        <CssModule />
      </div>
    );
  }
}

export default App;