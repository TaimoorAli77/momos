import React from 'react';
import UberEats from '../UberEats';
import HotDrinks from './HotDrinks';
import Footer from '../order/Footer';

const Menu = () => {
  return (
    <div>
      <h1 className='text-center menuS pt-5 mt-5'>Our Menu</h1>
      <div className='container'>
        <div className="container-fluid">
          <div className="row ">
            <div className="col-md-2">
              <div className="deliverooTwo">
                <div className='d-flex justify-content-center p-0'>
                  <UberEats />
                </div>
                <div className='d-flex justify-content-center'>

                  <p className='m-4'>Hot Drinks</p>
                  <p className='m-4' >Breakfast</p>
                  <p className='m-4' >Momos</p>
                  <p className='m-4' >Bubble Teas</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <HotDrinks />

      <div className='pt-5'>

        <Footer />
      </div>
    </div>
  );
}

export default Menu;
