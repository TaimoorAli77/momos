import React from 'react';
import imgSrc from '../images/my-bg1-1-1024x406.jpg'
import OrderNow from './OrderNow';
import UberEats from './UberEats';
import Who from './Who';
import Food from './Food';
import Carousol from './Carousol';
import Reviews from './Reviews';
import OrderNowTwo from './order/OrderNowTwo';
const Home = () => {
  return (
    <React.Fragment>
      <div className='EightShapes '>
        <img className='img1' src={imgSrc} alt='missing' />
        <OrderNow />

      </div>  <div>
        <i class="fa-solid fa-angle-up scrolledArrow"></i>


        </div>
     
      <div className='container'>
        <UberEats />
      </div>
      <div>
        <Who />
      </div>
      <div>
        <Food />
      </div>
      <div>
      <Carousol />
      </div>
      <div  className='py-5'>
        <Reviews />
      </div>

<div>
  <OrderNowTwo />
</div>

    </React.Fragment>
  );
}
export default Home;
