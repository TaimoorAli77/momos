import React from 'react';
import Arrow from '../Arrow';

const Footer = () => {
  return (
    <div className='footer'>
      <p className='mx-2'>Copyright © 2023 ! momofood.co.uk</p>
      <div>
        <Arrow target="_blank" fa="fa-solid fa fa-facebook scrolledArrow2 scrolledArrow scRol" url="https://www.facebook.com/Momofood.co.uk" />
        <Arrow  target="_blank" fa="fa-solid fa fa-instagram  scrolledArrow scrolledArrow3 scRol" url="https://www.instagram.com/momoslondon/?igshid=YmMyMTA2M2Y%3D"/>

    </div>
    </div>
  );
}

export default Footer;
