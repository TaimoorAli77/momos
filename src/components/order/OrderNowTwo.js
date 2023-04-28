import React from 'react';
import UberEats from '../UberEats';
// import mapImage from '../../images/StaticMapService.png'
// import final from '../../images/final.png'
const OrderNowTwo = () => {
  return (
    <div className='orderApps pt-5 '>
      <h1 className='textOrder'>Order Now</h1>

      <div className="container pt-5">

        <UberEats />
      </div>
      <div className="container-fluid pt-5 pl-5 ml-5">
        <div className="container pl-5">
          <div className="row">
            <div className="col-md-5 faMarker">
              <p>
                <i class="fa fa-map-marker " aria-hidden="true"></i>  13 Vallance Road; E1 5HS; London
              </p>
              <p > <i class="fa fa-envelope" aria-hidden="true"></i>  info@momofood.co.uk</p>
              <p>
                <i class="fa fa-phone" aria-hidden="true"></i>  020 7059 0560
              </p>
            </div>
            <div className="col-md-6 mapImg">

  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.6843587595013!2d-0.06575382283890618!3d51.51900657181593!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761ccc1541ac67%3A0x2d8cf9f6d98361c1!2s13%20Vallance%20Rd%2C%20London%20E1%205HS%2C%20UK!5e0!3m2!1sen!2s!4v1682712333718!5m2!1sen!2s" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderNowTwo;
