import React from 'react';
import UberEats from '../UberEats';
import HotDrinks from './HotDrinks';
import Footer from '../order/Footer';
import Breakfast from './Breakfast'
import Bubble from './Bubble';
import Momos from './Momos'
const Menu = () => {
  return (
    <div className='setHeight'>
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
                  <ul className="nav nav-pills">
                    <li className="nav-item">
                      <a className="nav-link active m-4" data-bs-toggle="pill" href="#HotDrinks"> Hot Drinks</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link m-4" data-bs-toggle="pill" href="#Breakfast">Breakfast</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link m-4" data-bs-toggle="pill" href="#Momos">Momos</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link m-4" data-bs-toggle="pill" href="#Bubble">Bubble Teas</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="tab-content">
        <div className="tab-pane container active" id="HotDrinks"><HotDrinks />
       </div>
         <div className="tab-pane container fade" id="Breakfast"><Breakfast />
        </div>
       <div className="tab-pane container fade" id="Momos"><Momos />
        </div>
        <div className="tab-pane container fade" id="Bubble"><Bubble /> 
        </div>
        <div className='pt-5'>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Menu;
