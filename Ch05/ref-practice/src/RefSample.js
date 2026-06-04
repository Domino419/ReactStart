import React, { Component } from 'react';

class RefSample extends Component  {

  input = React.createRef() ; 

  handleFocus = () => {
    this.input.current.focus() ; 
  }

  render () {
    console.log( 'start  RefSample ! ' )
    return (
      <div>
        <input ref={this.input} />
      </div>
    ) ; 
  }
}

export default RefSample;
