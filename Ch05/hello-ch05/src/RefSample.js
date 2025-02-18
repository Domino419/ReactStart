import  React, { Component } from 'react';

class RefSample extends Component {
    input = React.createRef() ;

    handleFocus = () => {
        this.input.focus() ;
    }

    render() {
        return (
            <div>
                <input ref={this.input} />
            </div>
        );
    }
}

export default RefSample;