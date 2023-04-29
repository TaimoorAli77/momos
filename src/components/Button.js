import React from 'react';
import { Link } from 'react-router-dom';
const Button = (props) => {
  return (
    <div>
     <Link className="btn btn-danger" type="submit" to={props.url} >{props.btn}</Link> 
    </div>
  );
}

export default Button;
