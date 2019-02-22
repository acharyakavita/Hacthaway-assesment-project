import React from "react";
import Classes from "./Toggle.css";

/*toggle to (+) or(-) based on the flag set for each student*/
const toggle = props => {
    let symbol=null;
    if(props.isToggle){
        symbol=<button onClick={props.toggle} className={Classes.Toggle}>-</button>
    }
    else{
        symbol=<button onClick={props.toggle} className={Classes.Toggle}>+</button> 
    }
    
  return (
    <div>
      {symbol}
    </div>
  );
};

export default toggle;
