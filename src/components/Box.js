import React from 'react';
import "./stylesheets/_Box.scss";

const Box = (props) => {
  return(
    <div className="box">
      <div className="box__front" style={{backgroundColor: props.color}}></div>
      <div className="box__back" onClick={props.handleClick}></div>
    </div>
  );
}

export default Box;