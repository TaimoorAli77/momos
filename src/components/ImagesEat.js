import React from 'react';

const ImagesEat = (props) => {
  return (
    <React.Fragment>
    <div>
      <div className='deliveroo'>
                <img className='deliverooImg' src={props.url} alt={props.alt} />
      </div>    
    </div>

      
    </React.Fragment>
  );
}

export default ImagesEat;
