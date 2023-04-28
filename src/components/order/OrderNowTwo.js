import React from 'react';
import UberEats from '../UberEats';

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
            <div className="col-md-12">
              <div className="col-md-3 faMarker">
                <p>
                <i class="fa fa-map-marker " aria-hidden="true"></i>  13 Vallance Road; E1 5HS; London
                </p>
                <p > <i class="fa fa-envelope" aria-hidden="true"></i>  info@momofood.co.uk</p>
                <p>
                <i class="fa fa-phone" aria-hidden="true"></i>  020 7059 0560
                </p>
              </div>
              <div className="col-md-9">

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderNowTwo;
