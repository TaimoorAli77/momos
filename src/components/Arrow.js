import React from 'react';
import { Link } from "react-router-dom";

const Arrow = (props) => {
  return (
    <div>
      <Link target={props.target} to={props.url}><i className={props.fa} /></Link>
    </div>
  );
}

export default Arrow;
