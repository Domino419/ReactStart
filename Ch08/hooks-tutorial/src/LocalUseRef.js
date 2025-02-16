/*
import  { Component } from 'react';

class LocalUseRef extends Component {
    id = 1 
    setId = (n) => {
        this.id = n ; 
    }
    printId = () => {
        console.log('::::::::::::::::::::::::::::::::::::::::: LocalUseRef :: printId ::' , this.id)
    }

    render() {
        return (
            <div>
                Mycomponent LocalUseRef
            </div>
        );
    }
}

export default LocalUseRef;



*/

import { useRef } from "react";

const LocalUseRef = () => {
  const id = useRef(1);
  const setId = (n) => {
    id.current = n;
  };

  const printId = () => {
    console.log(
      "::::::::::::::::::::::::::::::::::::::::: LocalUseRef :: printId ::",
      this.id
    );
  };

  return (
   <div>
    LocalUseRef
  </div>
  );
};

export default LocalUseRef;
