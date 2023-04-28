import React from 'react';

const Arrow = (props) => {
  return (
    <div>
      <a target="_blank" href={props.url}><i class={props.fa}></i></a>
    </div>
  );
}

export default Arrow;
