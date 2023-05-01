import React from 'react';
import Arrow from '../Arrow';
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <div className='footer'>
      <p className='mx-2'>Copyright © 2023 ! momofood.co.uk</p>
      <div>
        <Arrow  target="_blank" fa="fa-solid fa fa-instagram  scrolledArrow scrolledArrow3 scRol" url="https://www.instagram.com/momoslondon/?igshid=YmMyMTA2M2Y%3D"/>
        <Link target="_blank" exact to="facebook.com"><i className="fa-solid fa fa-facebook scrolledArrow2 scrolledArrow scRol" /></Link>

    </div>
    </div>
  );
}

export default Footer;
