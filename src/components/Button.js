import React from 'react';

const Button = (props) => {
  return (
    <div>
     <button className="btn btn-danger btn-lg" type="submit">{props.btn}</button> 
    </div>
  );
}

export default Button;
