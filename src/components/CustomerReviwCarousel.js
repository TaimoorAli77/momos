import React from 'react';
import stars from '../images/f.svg'
const CustomerReviwCarousel = () => {
  return (
    <div>
      <div className="containr pt-5 mt-5">
      <div className="box">
        <img className="d-inline custImg" src="1.png " alt="customer-img" />
        <h5 className="d-inline custName">Taimoo Ali</h5>
        <p className="custDatePost">2023-04-26</p>
        <img className="d-inline gImg" src="g.png" alt="googel-img" />

        <div className="img-star">
          <img className="img-inlin" src={stars} alt="mis" />
          <img className="img-inlin" src={stars} alt="mis" />
          <img className="img-inlin" src={stars} alt="mis" />
          <img className="img-inlin" src={stars} alt="mis" />
          <img className="img-inlin" src={stars} alt="mis" />
        </div>
        <div className="custRThoughts">
          <p className="customer-review">
          I do think best Food in Lon don ... Friendly staff and good service.ff ff gd dd ede dd
            Loved it! yo yo yo 
          </p>
          <button className="btn btnReadMore" type="button">Read more</button>
        </div>
      </div>
    </div>
    </div>
  );
}

export default CustomerReviwCarousel;
